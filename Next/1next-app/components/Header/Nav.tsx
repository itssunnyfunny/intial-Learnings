import React from 'react'
import { useRouter } from "next/navigation";
function Nav() {
    const router = useRouter()
  return (
    <div>
         <header>
    <nav className="flex justify-between   pt-4  min-h-10  ">
      <div className=" text-2xl font-bold hover:cursor-pointer">Cal.com </div>
      <div className="  border-2 border-black rounded-full p-3 text-xs font-bold bg-zinc-50">
      <div className=" flex gap-6 hover:cursor-pointer">
      <div onClick={()=>{router.push('/pricing')}}>PRICING</div>
      <div onClick={()=>{router.push('/aboutus')}}>ABOUT US</div>
      <div onClick={()=>{router.push('/features')}}>FEATURES</div>
      <div onClick={()=>{router.push('/docs')}}>DOCS</div>
      <div onClick={()=>{router.push('/blog')}}>BLOG</div>
      </div>
      </div>
      <div> <div className=" bg-black text-white px-6 py-3 rounded-full text-xs font-semibold"><button  onClick={()=>{router.push('/signin')}}>LOGIN</button></div></div>
    </nav>
  </header>
    </div>
  )
}

export default Nav