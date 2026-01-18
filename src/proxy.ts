
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


const publicRoutes = ['/signin', '/signup'];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  const token = request.cookies.get('accessToken')?.value;
 
  console.log(token);
  

  if (!token) {
    const signinUrl = new URL('/signin', request.url);
    return NextResponse.redirect(signinUrl);
  }
if(pathname ==='/'){
  return NextResponse.redirect(new URL('/dashboard',request.url))
}
  return NextResponse.next();
}
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
