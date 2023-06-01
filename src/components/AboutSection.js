import React from 'react';
import "../components/AboutSection.css";
import about1 from "../assets/lautaro-andreani-xkBaqlcqeb4-unsplash.jpg";
import about2 from "../assets/tudor-baciu-vc3iVL_znJ8-unsplash.jpg";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";

export default function About(props){
  return (
    <div className='about-container'>
      <div className='top'>
        <img className='image' src={about1} loading='lazy'></img>
      </div>
      <div className='bottom'>
        <h2>{props.heading}</h2>
        <h4> {props.text}</h4>
        <FaHtml5 className='icon'/>
        <FaCss3 className='icon'/>
        <FaReact className='icon'/>
      

      </div>
    </div>


        
  )
}


