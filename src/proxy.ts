import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export async function proxy(request: NextRequest) {
    const {pathname} = request.nextUrl
    const publicRoutes = ['/signin','/signup']
    if (publicRoutes.includes(pathname)){
        return NextResponse.next()
    }
    const token = await request.cookies.get('accessToken')?.value
    console.log(token);
    
    if(!token){
        return NextResponse.redirect(new URL('/signin',request.url))
    }
    if (pathname === '/'){

        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    return NextResponse.next()
}

 
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}