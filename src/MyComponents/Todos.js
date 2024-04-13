import React from 'react'
import {TodoItem} from './TodoItem';

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
