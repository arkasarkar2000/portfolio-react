import React from 'react';
import "../components/Pricing.css"
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='cards'>
            <p>- Basic -</p>
            <h1>$ 100</h1>
            <p>- 3 Days -</p>
            <p>- 3 Pages -</p>
            <p>- Featured -</p>
            <p>- Resoponsive Design -</p>
            <Link to="/" className="btn"> Purchase Now</Link>
        </div>

        <div className='cards'>
            <p>- Premium -</p>
            <h1>$ 200</h1>
            <p>- 2 Days -</p>
            <p>- 5 Pages -</p>
            <p>- Featured -</p>
            <p>- Resoponsive Design -</p>
            <Link to="/" className="btn"> Purchase Now</Link>
        </div>

        <div className='cards'>
            <p>- Business -</p>
            <h1>$ 300</h1>
            <p>- 5 Days -</p>
            <p>- 8 Pages -</p>
            <p>- Featured -</p>
            <p>- Resoponsive Design -</p>
            <Link to="/" className="btn"> Purchase Now</Link>
        </div>


    </div>
  )
}

export default Pricing