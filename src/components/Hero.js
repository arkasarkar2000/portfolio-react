import "./Hero.css";
import React from "react";
import heroImg from "../assets/1656524907305.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-img">
        <img className="hero" src={heroImg} alt="heroImg" />
      </div>
        <div className="hero-text">
          <p>Hi, I'm Arka 👋 </p>
          <h1> FRONT-END WEB DEVELOPER</h1>
          <h5>HTML5 | CSS3 | JavaScript | ReactJS | PHP</h5>
          <p>
            A passionate <strong>Frontend web developer</strong> and <strong>UI/UX</strong><br/>
            enthusiast specialized in building stunning pixel-perfect interactive<br/>
            websites/applications.
          </p>
          <Link to="https://drive.google.com/file/d/1B8zkkzntGlGbdikgXgG5uSKbcKqvr8vO/view?usp=sharing"className="btn" target="_blank">
            Resume
          </Link>
        </div>
      

    </div>
  );
};

export default Hero;
