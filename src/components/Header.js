import React from "react";
import Type from "react-typed";

const Header = () => {
  return (
   <div id="home" className="header-wrapper">
    <div  className="main-info"> 
    <h1>Aaron Woods</h1>
    <Type
        className="type-text"
        strings={["Security Engineer", "IT Professional", "Coder"]}
        typeSpeed={40}
        backSpeed={60}
        loop
    />
    </div>
   </div> 
  )
}

export default Header