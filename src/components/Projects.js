import React from "react";
import heroImg from "../assets/1656524907305.jpg";
import coffee1 from "../assets/coffee1.png";
import coffee2 from "../assets/coffee2.png";
import gym1 from "../assets/gym1.png";
import gym2 from "../assets/gym2.png";
import rest1 from "../assets/rest1.png";
import rest2 from "../assets/rest2.png";
import port1 from "../assets/port1.png";
import port2 from "../assets/port2.png";
import "../components/Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="project-container">
      <h5 className="title"> Projects </h5>
        <div className="project-cards">
          <div className="project-img">
            <img className="hero1" src={coffee2} alt="heroImg" loading="lazy"/>
          </div>
          <div className="project-desc">
              <strong> Coffee Brand Website</strong>
            <h5>
              {" "}
              This coffee has been made using HTML,CSS and Vanilla JavaScript,<br/> and is a multipage website. We have cart functionality,<br/> checkout feature an search feature also included{" "}
            </h5>

            <Link to="/" className="btn">
            Website
          </Link>
          </div>
        </div>

        <div className="project-cards">
          
          <div className="project-desc">
              <strong> Gym Landing Page</strong>
            <h5>
              {" "}
              This GYM Landing Page has been made using HTML,CSS and Vanilla JavaScript.<br/>{" "}
            </h5>
            <Link to="/" className="btn">
            Website
          </Link>
          </div>

          <div className="project-img">
            <img className="hero1" src={gym1} alt="heroImg" loading="lazy" />
          </div>
        </div>

        <div className="project-cards">
          <div className="project-img">
            <img className="hero1" src={rest1} alt="heroImg" loading="lazy"/>
          </div>
          <div className="project-desc">
              <strong> Restaurant Website</strong>
            <h5>
              {" "}
              This Restaurant has been made using HTML,CSS and Vanilla JavaScript.<br/>It has a menu section.{" "}
            </h5>
            <Link to="https://neorestaurant.netlify.app" className="btn">
            Website
          </Link>
          </div>
        </div>

        <div className="project-cards">
          
          <div className="project-desc">
              <strong> ScreenScope</strong>
            <h5>
              {" "}
            This website is a movie catalogue website .<br/> It is build using HTML,CSS,ReactJS and I have used axios to fetch API and display movies and also a search feature. <br/> and has all the necessary functionalities.{" "}
            </h5>
            <Link to="https://screenscope.netlify.app" className="btn">
            Website
          </Link>
          </div>

          <div className="project-img">
            <img className="hero1" src={port1} alt="heroImg" loading="lazy" />
          </div>
        </div>


      
    </div>
  );
};

export default Projects;
