import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import getUserRole from "./utils/supabase/getUserRole";

export async function middleware(
  request: NextRequest,
  event: NextFetchEvent,
  response: NextResponse,
) {
  await updateSession(request);

  if (request.nextUrl.pathname.startsWith("/dashboard/admin")) {
    const { role } = await getUserRole();

    if (role !== "admin") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (!role) {
      return NextResponse.redirect(new URL("/", request.url));
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
