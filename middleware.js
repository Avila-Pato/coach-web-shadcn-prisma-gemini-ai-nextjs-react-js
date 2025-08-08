import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/resume(.*)",
  "/interview(.*)",
  "/ai-cover-letter(.*)",
  "/onboarding(.*)"
])


export default clerkMiddleware(async (auth, req) => {
  const signInFallbackRedirectUrl = process.env.NEXT_PUBLIC_SIGNIN_FALLBACK_URL

  const {userId} = await auth()

 if (!userId && isProtectedRoute(req)) {
  const { redirectToSignIn } = await auth()
  return redirectToSignIn({ redirectUrl: signInFallbackRedirectUrl })
}

return NextResponse.next()

})



export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};