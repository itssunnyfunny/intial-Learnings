import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";
import { emitWarning } from "process";

 
 

 export async function POST(req: NextRequest) {
     // data base logic

     const body = await req.json()
     console.log(body);
     const datares = await prisma.user.create({
        data: {
            email: body.username,
            password: body.password
        }
     })
     
     return NextResponse.json({
       msg: "Your are logged in!"
     })
}


export async function GET(req:NextRequest,) {

  const resdata = await prisma.user.findMany()

  return NextResponse.json(resdata,{status: 200})
};


export async function PUT(req:NextRequest) {
  const body:{email: string, id: number} = await req.json()

  const resdata = await prisma.user.update({
    where: {id: body.id},
    data: {
      email: body.email
    },
    select: {
      id : true,
      email: true,
      
    }
  })

  return NextResponse.json({
    newdata: resdata,
    msg: "user is updated"
  })
  
}


export async function DELETE(req:NextRequest) {
  const body: {id: number} = await req.json();

  const resdata = await prisma.user.delete({
    where: {id: body.id},
    select: {
      email: true
    }
  })
  
  return NextResponse.json({
    resdata,
    msg: "user id deleted successfully"
  })
}


