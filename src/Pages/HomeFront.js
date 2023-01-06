import React from 'react'
import "../Styling/HomeFront.css";

function HomeFront() {

  return (
    <div className='hero-container'>
        <div className="hero-desc">
            <h3 className="title">TWIGGY</h3>
            <h1>COMING SOON</h1>
            <p>Innovate | Inform | Inspire</p>
            <div className="newsletter-form">
                <p>want to be notified?</p>
                <form action="submit">
                    <input type="text" placeholder='enter your email'/>
                    <button type='submit'>Sign-up</button>
                </form>
            </div>
        </div>
        <div className="hero-socials">

        </div>
    </div>
  )
}

export default HomeFront