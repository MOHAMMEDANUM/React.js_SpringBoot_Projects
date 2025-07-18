import React, { useState } from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import Search from '../Search/Search'

function NavBar({ setSearchDataDb, setSearchFlag ,flagAdminLogin}) {

 

  return (
    <>
    

    <div className="nav-container">

        <div className='nav-logo'>
            <h1>DealMart</h1>
        </div>

        <div className="nav-search-wrapper">
          <Search
        setSearchDataDb={setSearchDataDb}
        setSearchFlag={setSearchFlag}
      />
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
                <Link to="/contact">CONTACT</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/signin">LOGIN</Link>
              </li>

              {
                flagAdminLogin && <li>
                    <Link to="/admin">ADMIN</Link>
                  </li>
              }

                  


            </ul>
        </div>

    </div>
    
    
    
    
    </>
  )
}

export default NavBar