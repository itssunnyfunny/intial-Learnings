import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [latestMessage, setLatestMessage] = useState("")
  const [massege, setMassege] = useState("")
  useEffect(()=>{
    const socket = new WebSocket('ws://localhost:8088')
    socket.onopen = ()=>{
      console.log("Connected");
      setSocket(socket)
      
    }
    socket.onmessage = (massege)=>{
      console.log('Received message: ', massege.data);
      setLatestMessage(massege.data)
      
    }
    return ()=>{
      socket.close()
    }
  },[])

  if (!socket) {
    return <div>
       Loading ....
    </div>
  }

  return (
    <>
    <input onChange={(e)=>{
      setMassege(e.target.value)
    }} ></input> <br /><br />
    <button onClick={()=> socket.send(massege)}>send</button> <br />
     {latestMessage}
     </>
  )
}

export default App
