import React from "react";
//import {TodoItem} from "./MyComponents/TodoItem";

// export default function TodoItem({todo})
// {
//     return(
//         <div>
//           <h4> {todo.title}</h4>
//           <p>{todo.desc}</p>
//         </div>
//     )
// }

export const TodoItem = ({todo, onDelete}) => {
    return(
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button  className="btn btn-sm btn-danger" onClick ={()=> {onDelete(todo)}}
            >Delete</button>
        </div>
    )
}