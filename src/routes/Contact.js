import React from 'react';
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar/>
      
      <AboutSection heading="Contact Me" text="You can fill up the below form, to conatct me"/>
      <ContactForm/>
      <Footer/>

    </div>
  )
}

export default Contact