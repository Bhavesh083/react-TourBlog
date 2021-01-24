import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
          <div className='Subsform'>  
           <h4>Join the Adventure newsletter to receive our best vacation deals</h4>
           <p>You can unsubscribe at any time. </p>
           <form>
           <input placeholder='Your Email' type='email'/>
           <button>Subscribe</button>
           </form>
          </div> 
          <div className='container-links'>
          <div className='About'>
          <ul className='Aboutus'>
              <li><h3 className='divh2'>About Us</h3></li>
              <li>How it Works</li>
              <li>Testimonals</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Terms of Service</li>
          </ul>
          </div>
          <div className='Cont'>
          <ul className='Contact'>
              <li> <h3 className='divh2'>Contact Us</h3></li>
              <li>Contact</li>
              <li>Support</li>
              <li>Destinations</li>
              <li>Sponsorships</li>
          </ul>
          </div>
          <div className='Vid'>
          <ul className='Videos'>
              <li><h3 className='divh2'>Videos</h3></li>
              <li>Submit Video</li>
              <li>Ambassadors</li>
              <li>Agency</li>
              <li>Influencer</li>
          </ul>
          </div>
          <div className='Soc'>
          <ul className='Social'>
              <li><h3 className='divh2'>Social Media</h3></li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Youtube</li>
              <li>Twitter</li>
          </ul>
          </div>
          </div>
          <div className='logofooter'>
              <h1>Nature Tour</h1>
              <p>Tour@2021</p>
              <ul>
                  <li>f</li>
                  <li>I</li>
                  <li>U</li>
                  <li>T</li>
                  <li>Ln</li>
              </ul>
          </div>
        </div>
    )
}

export default Footer
