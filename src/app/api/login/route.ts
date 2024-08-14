import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

//данные для входа
const user = {
    login: "admin",
    password: "123"
}

//для jwt
const secretkey = "mySecretKey"

export async function POST(req: NextRequest) {
    const { login, password } = await req.json();

    if (login === user.login && password === user.password) {
        const res = NextResponse.json({
            success: true,
        })

        res.cookies.set("fakeToken", jwt.sign({ token: "fakeToken" }, secretkey))

        return res
    }

    return NextResponse.json({
        success: false,
        error: "invalid login or password"
    })
}