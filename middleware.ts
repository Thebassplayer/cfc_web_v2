import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import getUserRole from "./utils/supabase/getUserRole";
import { APP_ROUTES } from "./constants/routes";

export async function middleware(
  request: NextRequest,
  event: NextFetchEvent,
  response: NextResponse,
) {
  await updateSession(request);

  if (request.nextUrl.pathname.startsWith(APP_ROUTES.DASHBOARD.ADMIN)) {
    const { role } = await getUserRole();

    // If user is not logged in redirect to /home
    if (!role) {
      return NextResponse.redirect(new URL(APP_ROUTES.HOME, request.url));
    }

    // If user is not admin redirect to /dashboard

    if (role !== "admin") {
      return NextResponse.redirect(
        new URL(APP_ROUTES.DASHBOARD.ROOT, request.url),
      );
    }
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
