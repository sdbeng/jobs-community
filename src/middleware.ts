import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/chat(.*)',
  '/developers(.*)',
  '/projects(.*)'
]);
export default clerkMiddleware(async (auth, req) => {
  // console.log("Middleware executed for:", req.nextUrl.pathname);
  if (isProtectedRoute(req)) await auth.protect()

  return NextResponse.next();
});

console.log('middleware called...')
export const config = {
  // matcher: [
  //   //add / route to the matcher
  //   // "/projects",
  //   "/((?!.*\\..*|_next).*)", // Don't run middleware on static files
  //   "/", // Run middleware on index page
  //   "/(api|trpc)(.*)",
  // ],
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};