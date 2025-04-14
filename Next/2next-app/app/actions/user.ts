"use server"
// when you know the funtion is going to use in both the frontend and 
// backend so its ideal to move it in a differnt fn and use it on your cunvinient
import prisma from "@/db";

 export default async function signup(email:string, password: string) {
    try {
        await prisma.user.create({
            data: {
                email,
                password
            }
        })
        return true
    } catch (error) {
        return false
    }
}