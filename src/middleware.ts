import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const isHasToken = request.cookies.has("fakeToken")

    if (isHasToken) return NextResponse.next()

    return NextResponse.redirect(new URL("/login", request.url))
}

export const config = {
    matcher: ['/posts/:id*', "/posts"],
}