import React from 'react'
import './mail.css'

const Mail = () => {
  return (
    <div className='mail'>
        <div className="mailContainer">
            <h1 className='mailTitle'>Save Time, save money!!</h1>
            <span className="mailDesc">Sign up and we'll send the best deals to you</span>
            <div className="newsletter">
                <input type="email" id="subsInput" className="subscribeInput" placeholder='Email@example.com'/>
                <button type="submit" className='subsBtn'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Mail
