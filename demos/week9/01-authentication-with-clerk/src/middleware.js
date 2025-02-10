//I have copied the middleware template from the docs: https://clerk.com/docs/references/nextjs/clerk-middleware#main

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

//we will use this to determine which paths are public and which paths are protected
//find a match for the route user-profile and any nested route inside too
//we are focusing on finding matches for protected routes
const isProtectedRoute = createRouteMatcher(["/user-profile(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  //we will specific that we want ot protect certain paths
  //if the request comes from a protected route, trigger the authentication flow
  if (isProtectedRoute(req)) await auth.protect();
});

//The matcher will try to find a match between the paths we specified in the clerkMiddleware function. If the matcher finds a match, it will activate if the path is protected or public.
//To find the match, matcher uses regex
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",

    "/(api|trpc)(.*)",
  ],
};
