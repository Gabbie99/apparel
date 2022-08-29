import React from 'react'
import myhero from '../images/myhero.jpg'
import './Mybody.css'

function AboutBody() {
  return (
    <div>
       <div className='about'>
        <div>
           <h1>About Base</h1> 
        <p className='about-p'>
            At Base, we believe in the trend-setters, the creators, the curated.

            Establishing our first tailoring shop in London in 1910, we've been shaping the fashion industry since our humble beginnings. Today, we focus on curating the best collections of 0-16 kids clothing, from classic Stone Island Junior and Moncler Enfant staples to statement pieces from Gucci, Kenzo Kids and Burberry. Home to the freshest drops and exclusives, we love to unearth undiscovered, up-and-coming brands.

            Customer satisfaction is our main aim, it starts from curating the best collections, all the way down to a positive customer experience and delivering your order quickly. We are proud to offer a 5 star service to our customers worldwide.

            Our buying team travels the world to ensure we stock the best global children's brands available on the market. We curate our selections to ensure that the base offer is the strongest and most exciting for our customers both in the UK and globally.

            With our long standing relationship with luxury brands such as Gucci, Fendi, Moncler and Burberry we are confident that our selection is the best you'll find.

            Want to find our more? Why not chat to us. Click here to send us an email or use our live chat to speak to one of our friendly customer service team. 
        </p> 
        </div>
      
        <div>
            <img id='desk' src={myhero} alt="..lady" />
        </div> 
    </div>
    
        <footer>
          &copy; Copyright Gabbie A. Online Services 2022 | Developed by <span>Alexander Gabrielle</span>
        </footer>
    </div>
  )
}

export default AboutBody