import React from 'react';
import "../components/ContactForm.css";
import { Link } from "react-router-dom";


const ContactForm = () => {
  return (
    <div className='form-section'>
        <h1> CONTACT FORM</h1>
        <div className='form'>
            <form>
                <input class="fname" type="text" placeholder="Full name"/><br/>
                <input type="text" name="name" placeholder="Email"/><br/>
                <input type="text" name="name" placeholder="Phone number"/><br/>
                <input type="text" name="name" placeholder="Website"/><br/>
                <textarea rows="10"></textarea>
            </form>
            <Link to="/" className="btn">
          Send Message
        </Link>
        </div>

    </div>
  )
}

export default ContactForm