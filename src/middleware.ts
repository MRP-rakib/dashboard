import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    const { pathname } = req.nextUrl;

    const publicRoutes = ["/signin", "/signup"];

    if (!token) {
        if (publicRoutes.some(route => pathname.startsWith(route))) {
            return NextResponse.next();
        }

        return NextResponse.redirect(new URL("/signin", req.url));
    }

    if (token && publicRoutes.some(route => pathname.startsWith(route))) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|api|favicon.ico|image).*)"]
};
