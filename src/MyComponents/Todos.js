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

// export const Todos = (props) => {
//     return(
//         <div className="container">
//             <h3 className ="my-3"> Todos List :- </h3>
//             {props.todos?.length===0? "No Todos to display": //<p className="text-center"></p></p>:
//           props.todos.map((todo)=>{
//             return(  
//                 <>
//                  <TodoItem todo = {todo} key={todo.sno} onDelete = {props.onDelete}/> <hr/>
//                 </>
//           )
//         })
//           }  
            
//         </div>
//     )
// }

// export const Todos = (props) => {
//     let myStyle = {
//         minHeight: "70vh",
//         margin: "40px auto"
//     }
//     return (
//         <div className="container" style={myStyle}>
//             <h3 className="my-3">Todos List</h3>
//             {props.todos.length === 0 ? "No Todos to display" :
//                 props.todos.map((todo) => {
//                     return
//                     <>
//                         <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr />
//                     </>

//                 })
//             }
//         </div>
//     )
// }

export const Todos = (props) => {
    const todos = props.todos || []; // Ensure todos is an array, default to empty array if undefined

    return (
        <div className="container">
            <h3 className="my-3"> Todos List :- </h3>
            {todos.length === 0 ? 
                <p className="text-center">No Todos to display</p> : 
                todos.map((todo) => (
                    <React.Fragment key={todo.sno}>
                        <TodoItem todo={todo} onDelete={props.onDelete} />
                        <hr />
                    </React.Fragment>
                ))
            }
        </div>
    );
}

