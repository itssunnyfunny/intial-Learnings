
import React from 'react'

function signIn() {
  return (
    <div className=" border border-black p-8  rounded-md drop-shadow-lg shadow-md text-black text-lg bg-slate-200">
      <div className=" flex-row">
         <h1 className=" text-center text-2xl font-semibold my-3">signIn</h1>
         <h2>email</h2>
         <input type="text" placeholder="email" className=" border border-black  rounded-md text-center" ></input>
         <h2>password</h2>
         <input type="text" placeholder="password" className=" border border-black  rounded-md text-center" ></input>
         <br />
          <button className=" bg-black text-slate-200 px-3 py-1 rounded-md mt-4 ">submit</button>
      </div>
    </div>
  )
}

export default signIn