import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";


export async function middleware(req) {
  const {
    origin
  } = new URL(req.url);
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const user = await supabase.auth.getSession();
  if (!user?.data?.session) {
    return NextResponse.redirect(`${origin}/auth-server-action`);
  }
  return res;
}
export const config = {
  matcher: [
    "/generated_post",
    "/youtubetolinkedin"
  ]
}
