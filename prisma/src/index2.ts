 import { PrismaClient } from "@prisma/client";
import { log } from "console";
  const prisma = new PrismaClient();


  // post user or insert user

  async function insertUser(email:string, firstName: string, lastName: string, password: string) {
      const res =    await prisma.user.create({
            data: {
                email,
                firstName,
                lastName,
                password
            },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                password: true
            }
         });
         console.log(res);
         
  }


  // get user data 
  async function getUser(email:string) {
    const res = await prisma.user.findUnique({
        where: {email: email},
        select: {
            id: true,
            firstName: true,
            lastName: true,
            password: true,
            
        }
    });
    console.log(res);
    
  };

  // update user data
  interface updatedata {
    lastName: string,
    password: string
  }

  async function updateUser(email:string, {lastName, password}: updatedata) {
       const res = await prisma.user.update({
        where: {email: email},
        data: {
            lastName,
            password
        },
        select: {
            id : true,
            firstName: true,
            lastName: true,
            password: true
        }
       })
       console.log(res);
       
  };


  async function deleteUser(email:string) {
    const res = await prisma.user.delete({
        where: {email: email},
        select: {
            id: true,
            firstName: true,
            lastName: true,
            password: true,
            email:true
        }
    });
    console.log(res);
    
  }