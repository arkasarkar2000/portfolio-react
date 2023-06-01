import React from 'react'
import "../components/Footer.css";
import { FaArrowUp} from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram} from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {

    const scrollFunction = ()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    
  return (
    <div className='footer-container'>
        <div className='footer-icons'>
            <Link to="https://github.com/arkasarkar2000" target='_blank'> <AiFillGithub/></Link>
            <Link to="https://www.linkedin.com/in/arkaprava-sarkar-094808214/" > <AiFillLinkedin/></Link>
            <Link to="/" > <AiFillInstagram/></Link>
        </div>
        <div className='footer-text'>
            <h5>Made with ♥ by Arka Sarkar &copy; 2023  </h5>
        </div>
        <Link to="/" className="btn btn2" onClick={scrollFunction}>
          <FaArrowUp className='arrow'/>
        </Link>


    </div>
  )
}

export default Footer