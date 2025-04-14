import Card from "@/components/Card";
import { GptCard } from "@/components/GptCard";

import Image from "next/image";
// import prisma from "@/db";


// async function getUser() {
//   const data = await prisma.user.findFirst()
//   return data
// }

export default async function Home() {
// const userdetails = await getUser()

  return (
    <>
     <GptCard /> 
     <div className=" flex justify-around my-10">
     <Card btncolor="bg-green-100 text-green-700" btntext="Frontend Cloud" content="Deploy faster"/>
     <Card  btncolor="bg-blue-100 text-blue-700"/>
     <Card btncolor="bg-yellow-100 text-yellow-700" btntext="Visual Editor" content="Click, edit, publish"/>
     </div>
    </>
  )
 
} 
{/* <div className=" flex flex-col justify-center h-screen">
  <div className="flex justify-center">
    <div className=" border p-8 rounded w-auto">
    <div > 
      password: {userdetails?.password}
    </div>
    <div>email:  {userdetails?.email}</div>
    </div>
  </div>
</div> */}