import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function middleware(
  request: NextRequest,
  event: NextFetchEvent,
  response: NextResponse,
) {
  const supabase = createClient();

  let { data: profiles, error } = await supabase
    .from("profiles")
    .select("role");

  console.log(profiles, error);

  if (!profiles) {
    return NextResponse.redirect("/");
  }

  const { role } = profiles[0];

  if (role && role === "admin") {
    return NextResponse.redirect(new URL("/fiolosofia", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
