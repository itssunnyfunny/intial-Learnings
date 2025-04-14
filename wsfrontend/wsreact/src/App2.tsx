import  {useEffect, useState} from 'react'

function App2() {
    const [socket, setSocket] = useState<null | WebSocket>(null);
    const [latestMessage, setLatestMessage] = useState("");
    const [message, setMessage] = useState("");

    useEffect(()=>{
        const socket2 = new WebSocket('ws://localhost:8088');
        socket2.onopen = ()=>{
            console.log("Connected");
          setSocket(socket2)
        };

        socket2.onmessage = (message) =>{
            console.log(message.data);
            setLatestMessage(message.data)
        }
    },[])

    if (!socket) {
        return <div>
            Connecting to server @@@
        </div>
    }
  return (
   <>
     <input onChange={(e)=>{
        setMessage(e.target.value)
     }}></input> <br /> <br />
     <button onClick={()=> socket.send(message)}>send</button> <br /> <br />
     <div>{latestMessage} </div>
   </>
  )
}

export default App2