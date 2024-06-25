import { APP_ROUTES } from "@/constants/routes";
import getUserRole from "@/utils/supabase/getUserRole";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;

  if (code) {
    const supabase = createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  const { role } = await getUserRole();

  // If user is not logged in redirect to /home
  if (!role) {
    return NextResponse.redirect(`${origin}${APP_ROUTES.HOME}`);
  }

  // If user is not admin redirect to /dashboard
  if (role !== "admin") {
    return NextResponse.redirect(`${origin}${APP_ROUTES.DASHBOARD.ROOT}`);
  }

  // If user is admin redirect to /dashboard/admin
  return NextResponse.redirect(`${origin}${APP_ROUTES.DASHBOARD.ADMIN}`);
}
