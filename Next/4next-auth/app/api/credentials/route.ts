import { NEXT_AUTH2 } from "@/app/lib/auth2";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET() {
    const session = await getServerSession(NEXT_AUTH2);

   return   NextResponse.json({
        session
    })
}