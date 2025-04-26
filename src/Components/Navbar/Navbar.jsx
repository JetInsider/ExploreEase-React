import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
        <header>

            <nav className='navbar'>

                <div className="logo">

                <a href="/Landing-Page/index.html">ExploreEase</a>

                </div>

                <ul className="nav-links">

                  <li><NavLink to='/Home'>Home</NavLink></li>

                  <li><a href="/Home#features">Features</a></li>

                  <li><a href="/Home#about">About</a></li>

                  <li><a href="/Home#contact">Contact</a></li>
                  
                  <li><NavLink to='/Flights'>Flights</NavLink></li>

                  <li><NavLink to='/Hotels'>Hotels</NavLink></li>

                  <li><NavLink to='/itinerary-planner'>Itinerary Planner</NavLink></li>

                  <li><NavLink to='/SignIn'>Sign In</NavLink></li>

                </ul>
                
                {/* 
                <div className="hamburger">

                <i className="fas fa-bars"></i>

                </div> */}

            </nav>
        </header>
    </div>
  )
}

export default navbar
