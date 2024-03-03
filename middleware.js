import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const cookie = request.cookies.get("nextjs");
    if (cookie) {
        return NextResponse.rewrite(new URL("/main", request.url));
    }
  return NextResponse.redirect(new URL("/authentication/login", request.url));

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/:path*",
};
