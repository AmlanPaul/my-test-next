// middleware.ts
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export default function middleware(req) { 
  let verify =req.cookies.get('isLogin')
  let url = req.url;
  if(!verify && !url.includes('login')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  if(verify && url.includes('login')) {
    return NextResponse.redirect(new URL('/', req.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/events/:path*', '/events', '/','/login'],
}