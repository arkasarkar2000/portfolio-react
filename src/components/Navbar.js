import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
import { FaMoon } from 'react-icons/fa';

const Navbar = () => {

    const [color, setColor] = useState(false);
    const changeColor = ()=>{
        if(window.scrollY >=10){
            setColor(true);
        }else{
            setColor(false);
        }
    };
    window.addEventListener('scroll', changeColor);

    const changeMode = ()=>{
        document.body.classList.add("light")
    }

   

    



  

  return (
    <>

    <div className={color? "header header-bg" : "header"} id='header'>
        <div className='logo'>
            <h2> Portfolio </h2>
        </div>


        <div className='navbar'>
    
            <ul>
              
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/contact">Contact</Link>
                </li>
            </ul>

        </div>
    </div>
    </>
  )
}

export default Navbar