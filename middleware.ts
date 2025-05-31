import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname

  // Log for debugging
  console.log("Middleware - Path:", path)

  // Define public paths that don't require authentication
  const isPublicPath =
    path === "/" ||
    path === "/login" ||
    path === "/register" ||
    path === "/about" ||
    path === "/terms" ||
    path === "/contact" ||
    path === "/faq" ||
    path === "/checkout" ||
    path === "/pricing" ||
    path === "/dashboard" || // Make dashboard public for now
    path.startsWith("/checkout/")

  // Check if user is authenticated (this is a simplified example)
  const isAuthenticated = request.cookies.has("auth_token")

  // Redirect logic - but skip dashboard for now
  if (!isPublicPath && !isAuthenticated && path !== "/dashboard") {
    console.log("Redirecting to login from:", path)
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (path === "/login" && isAuthenticated) {
    console.log("Redirecting to dashboard from login")
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.png$).*)"],
}
