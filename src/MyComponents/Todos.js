import React from "react";
//import TodoItem from "./TodoItem";
import {TodoItem} from "../MyComponents/TodoItem";

// export default function Todos(props)
// {
//     return(
//         <div className="container">
//           <h3>Todos List</h3>
//           {/* {props.todos} */}
//           <TodoItem todo ={props.todo[0]}/>

//         </div>
//     )
// }

export const Todos = (props) =>{
    return(
        <div className="container">
            <h3 className ="text-center my-3"> Todos List</h3>
            {props.todos?.length==0? <p className="text-center">No Todos to display</p>: 
          props.todos.map((todo)=>{
            return <TodoItem todo = {todo} key={todo.sno} onDelete = {props.onDelete}/>
          })}  
            
        </div>
    )
}