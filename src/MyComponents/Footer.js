import React from 'react'
import '../Footer.css'

const Footer = () => {
   let footerStyle ={
    position :"relative",
    top:"500vh",
    width:"100%"  ,
    border:"4px solid yellow"
   }

  // let myStyle = {
  //   minHeight :"100vh"
  // }
  return (
    <footer className ="bg-dark text-light py-3 my-3" style={footerStyle}>
      <p className ="text-center" >
      Copyright &copy; MyTodoList.com
      </p>
      
    </footer>
  )
}

export default Footer
