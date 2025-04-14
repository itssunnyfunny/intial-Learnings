import React from "react"

export default function ({children}:{
    children: React.ReactNode
}) {
    return <div className=" mt-5 ">
       <div className=" text-center border-b-2 border-black "> 20% off on something for 31 october</div>
        <div className=" flex justify-center mt-20">
        {children}
        </div>
    </div>
    
}