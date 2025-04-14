 import { useState } from "react";
 
 export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false)
    return <div>
        <input style={{
            padding: 10,
            margin: 12
        }} type="text" placeholder="title" onChange={function (e) {
            const value = e.target.value;
            setTitle(value);}}
        ></input><br/>

        <input  style={{
            padding: 10,
            margin: 12
        }}
         type="text" placeholder="description" onChange={function (e) {
            const value = e.target.value;
            setDescription(value);
         }}></input><br/>

        
         <br/>
         <br/>
        <button
           onClick={function () {
            fetch("http://localhost:3001/create",{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                    completed: completed
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(async function (res) {
                const json = await res.json();
                alert("Todo added");
            })

           }}
           
        >Add to do</button>
         <br/>
         <br/>
        <button onClick={()=>{
            fetch("http://localhost:30001/create",{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                   
                }),
                headers:{
                    "content-type": "application/json"
                }
            }).then(async (res) => {
                const json = await res.json();
                alert(json)
            })
        }}
        >Add new todo</button>

       
        
    </div>
 }