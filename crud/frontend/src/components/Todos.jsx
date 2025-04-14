export function Todos({todos}) {
    // i have lot of problem with .map because lot of time i gitting a 
    // error todos.map is not a function so how i solved it 
    // i receiving the props i sould use "{}" {todos} so i can itterate on it ..
    return <div>
       {todos.map(function (todo) 
     { return <>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>{todo.completed==true ? "completed" : "Mark as Completed"} </button>
          </>}
       )}
    </div>
}