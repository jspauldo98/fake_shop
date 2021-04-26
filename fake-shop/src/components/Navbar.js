import { Icon } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom'
   const Navbar = ()=>{
      return(
            <nav className="nav-wrapper">
                  <div className="container">
                     <Link to="/" className="brand-logo">The Weirdest Shop On the Web</Link>
                     
                     <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                     </ul>
                  </div>
            </nav>  
      )
   }

export default Navbar;