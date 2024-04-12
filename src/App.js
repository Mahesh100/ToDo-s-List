import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import TodosItem from './MyComponents/TodoItem';
import {Todos} from './MyComponents/Todos';
import React, {useState} from 'react';

function App() {

  const onDelete = (todo)=>{
    console.log("I am onDelete of todo", todo);
    //  let index = todos.indexOf(todo);
    //  todos.splice(index,1);

    setTodos (todos.filter((e)=>{
      return e!==todo;
    }));
  }
    

  const [todos, setTodos] = useState ([

    {
      sno:1,
      title:"Got to Mall",
      desc: "Need to go to market to get this job done"

    },
    {
      sno:2,
      title: "Go to Market",
      desc: "Need to buy cookies"

    },

    {
      sno:3,
      title: "Go to Garage",
      desc : "Repair bike"
    }
  ]);

  return (
    //it is jsx
    // <div classNameNameName="App">  
    
    //   <header classNameName="App-header">
    //     <div>12+45</div>
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>

   
     <Header title = "My Todos List" searchBar = {true}/>
     <Todos todos={todos} onDelete = {onDelete}/>
     <Footer/>
    </>
  );
}

export default App;
