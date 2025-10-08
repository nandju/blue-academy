import { NextResponse, type NextRequest } from "next/server";

const AUTH_COOKIE_NAME = "blue_auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoggedIn = request.cookies.get(AUTH_COOKIE_NAME)?.value === "1";

  // Protect dashboard (student area)
  if (pathname.startsWith("/dashboard")) {
    if (!isLoggedIn) {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
  }

  // Protect admin area
  if (pathname.startsWith("/admin")) {
    if (!isLoggedIn) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
  }

  // Prevent accessing login when already authenticated
  if (pathname === "/login" && isLoggedIn) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  // Prevent accessing admin login when already authenticated
  if (pathname === "/admin/login" && isLoggedIn) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/login"],
};


