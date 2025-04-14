import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest) {
    const body:{
        id: number,
        title: string,
        description: string
    }  = await req.json();

    const res = prisma.user.findFirst(
        {
            where: {id: body.id},
            
        }
    );

    return NextResponse.json({
        msg: " what are you doing sir?"
    })
};

