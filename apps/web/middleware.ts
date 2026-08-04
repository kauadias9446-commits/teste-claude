import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Protect dashboard and api/chat routes
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/api/chat')) {
    const token = req.cookies.get('next-auth.session-token') || req.cookies.get('__Secure-next-auth.session-token')
    if (!token) {
      const url = req.nextUrl.clone()
      url.pathname = '/api/auth/signin'
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/chat/:path*']
}
