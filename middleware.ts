import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Middleware to restrict frequent visits to expensive or high-traffic pages.
 * This helps save Vercel billing by preventing redundant page loads and server executions.
 */
export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // 1. Define specific paths to rate limit
  const rateLimitedPaths = ['/payment-success', '/driver-recharge'];
  const lowerPath = pathname.toLowerCase();
  const isMatch = rateLimitedPaths.some(path => lowerPath.startsWith(path.toLowerCase()));

  if (isMatch) {
    // 2. Identify unique visit (by path and any key identifiers like order_id or driver_id)
    const orderId = searchParams.get('order_id');
    const driverId = searchParams.get('driver_id');
    
    // Fallback to the whole search query string if no specific ID is found, or just the path
    const identifier = orderId || driverId || searchParams.toString();
    const uniqueKey = identifier ? `${pathname}_${identifier}` : pathname;
    
    // Robust cookie name (no special characters except base64 chars)
    const cookieName = `vst_${Buffer.from(uniqueKey).toString('base64').substring(0, 30).replace(/[^a-zA-Z0-9]/g, '')}`;

    // 3. Check for existing "last visit" cookie
    const lastVisit = request.cookies.get(cookieName)?.value;
    const now = Date.now();

    if (lastVisit) {
      const timeElapsed = now - parseInt(lastVisit);
      const fiveMinutes = 5 * 60 * 1000;

      if (timeElapsed < fiveMinutes) {
        // Add 2s buffer to ensure server-side expiry before client-side countdown ends
        const remainingSeconds = Math.ceil((fiveMinutes - timeElapsed) / 1000) + 2;
        const redirectUrl = new URL('/too-many-requests', request.url);
        
        // Pass all original params + the remaining time
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('retry_after', remainingSeconds.toString());
        redirectUrl.search = newParams.toString();
        
        return NextResponse.redirect(redirectUrl);
      }
    }

    // 4. Set/Update cookie and allow the request
    const response = NextResponse.next();
    response.cookies.set(cookieName, now.toString(), {
      maxAge: 300, // 5 minutes in seconds
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
    return response;
  }

  return NextResponse.next();
}

// matcher ensures this code ONLY runs for the specific paths
export const config = {
  matcher: [
    '/payment-success',
    '/payment-success/:path*',
    '/driver-recharge',
    '/driver-recharge/:path*',
  ],
}
