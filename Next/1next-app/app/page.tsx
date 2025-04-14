"use client"
import Nav from "@/components/Header/Nav";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
  <div className=" h-screen min-w-full bg-zinc-100 text-black px-10">
   <Nav />
   <div className="  grid grid-cols-10 my-20 "> 
    <div className=" col-span-4">
       <h1 className=" text-6xl font-bold mb-8"> Scheduling <br /> infrastructure <br /> for <span className=" ">everyone</span></h1>

      <p className=" text-lg  font-medium ">Lorem ,<span className=" font-bold">Cal.com</span> dolor sit amet consectetur adipisicing <br /> elit. Doloremque repudiandae enim, sit, cum ea </p>
    </div>
    <div className=" col-span-6 grid grid-cols-10 border-2 border-black rounded-2xl max-w-2xl">
     <div className=" col-span-4 mx-5 my-5">  
      <div>
        <div>Q</div>
        <h2 className=" opacity-50">Rick Astley</h2>
        <h1 className=" text-xl font-semibold">Get Rickrolled</h1>
      </div>
      <div className=" text-xs font-semibold  mt-4 ">
        <div className=" flex gap-1"> <div> @ </div> <p className=" max-w-44"> Book me and I will never give you up. Cal sill neverl et you down. Open Source will never run around and desert you.</p></div>

        <div className=" mt-2"><h4>@ 30 min</h4> </div>
            
        <div className=" mt-2"> <h4>@ Zoom </h4></div>

      <div className="mt-2"> <h4>@ Europe/Dublin</h4></div>

      </div>
     </div>
    <div className=" col-span-6 border-l-2 border-zinc-300 flex justify-center items-center">div2</div>
    </div>
   </div>

   <div> <button className=" bg-black text-white px-12 py-5 rounded-3xl" onClick={()=>{router.push('/signup')}}>signUp  $ </button></div>
  </div>
  );
}
