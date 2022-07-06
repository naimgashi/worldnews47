import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    const url = req.nextUrl.clone()
    if (req.nextUrl.searchParams.get('fbclid')) {
        return NextResponse.redirect('https://worldnews47.com/'+url.pathname)
    }
    return NextResponse.next()
}
