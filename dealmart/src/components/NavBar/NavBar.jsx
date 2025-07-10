import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <>
    

    <div className="nav-container">

        <div className='nav-logo'>
            <h1>DealMart</h1>
        </div>
        <div >
            <ul className="nav-sections">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/product">PRODUCT</Link>
              </li>
              <li>
                <Link to="/admin">ADMIN</Link>
              </li>

            </ul>
        </div>

    </div>
    
    
    
    
    </>
  )
}

export default NavBar