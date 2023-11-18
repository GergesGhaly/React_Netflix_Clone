import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <header>
            <div className="showcase">

            <div className="showcase-top">
               <img src="https://i.ibb.co/r5krrdz/logo.png" alt=""/>
               <Link to="/" className="btn btn-rounded" >Sign in</Link>
           </div>

           <div className="showcase-content">
               <h1>Unlimited movies ,Tv shows and more</h1>
               <p>Whatch anywhere, Cancel anytimes</p>
             <Link to="/netflixshow" className="btn btn-xl">
                 Watch Free For 30 Days
                 <i className="fas fa-chevron-right btn-icon "></i>
             </Link>
           </div>

            </div>

        </header>
    )
}

export default Header
