"use client";
import {signIn, signOut, useSession} from 'next-auth/react'


export const Appbar = ()=>{
    const session = useSession()
    return <div>
        <button onClick={()=>{
            signIn()
        }}>SignIn</button><br />
        <button onClick={()=>{
            signOut()
        }}>SignOUt</button><br />
        {JSON.stringify(session)}
    </div>
}

