import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

import AboutSection from "../components/AboutSection";

const Project = () => {
  return (
    <div>
      <Navbar/>
      <AboutSection heading="Projects" text="Below are some of my latest projects. Feel free to explore them "/>
      <Projects/>
      <Footer/>
      

    </div>
  )
}

export default Project