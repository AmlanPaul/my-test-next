// middleware.ts
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(req) {
  console.log(req.cookies.get('isLogin'));
  let verify =req.cookies.get('isLogin')
  if(!verify) {
    console.log("Please login");
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/events/:path*', '/events', '/'],
}