"use client"
import { useRouter } from "next/navigation";
  


export default function () {
  const router = useRouter()
   function handle() {
     console.log(' user is submitted');
     
   }  
    return (
    <div className=" border border-black p-8  rounded-md drop-shadow-lg shadow-md text-lg text-black bg-slate-100">
      <div className=" flex-row">
         <h1 className=" text-center text-2xl font-semibold my-3">signUp</h1>
         <h2>username</h2>
         <input type="text" placeholder="username" className=" border border-black  rounded-md text-center " ></input>
         <h2>email</h2>
         <input type="text" placeholder="email" className=" border border-black  rounded-md text-center" ></input>
         <h2>password</h2>
         <input type="text" placeholder="password" className=" border border-black  rounded-md text-center" ></input>
         <br />
          <div className=" flex justify-between items-center gap-2">
          <button className=" bg-black text-slate-200 px-3 py-1 rounded-md mt-4 active:bg-slate-600" onClick={handle}>submit</button>
           <div className=" text-sm opacity-50  mt-2"> <h3>already have account</h3> <span className=" ml-8 hover:text-blue-700 hover:cursor-pointer" onClick={()=>{router.push("/signin")}}>signIn</span> </div>
          </div>
      </div>
    </div>
    );
  }
  