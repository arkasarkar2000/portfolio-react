import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import Pricing from '../components/Pricing';


const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutSection heading="Who Am I?" text="I'm a react front-end developer.
I create responsive secure website for my clients."/>
      <Pricing/>
      <Footer/>
    
    </div>
  )
}

export default About