// import React, { useState } from 'react'
// import "./navbar.css"
// import {Link} from "react-router-dom"
// import Search from '../Search/Search'
// import ThemeToggle from '../ThemeContext/ThemeToggle'

// function NavBar({ setSearchDataDb, setSearchFlag ,flagAdminLogin}) {

 

//   return (
//     <>
//     <div className="nav-container">

//         <div className='nav-logo'>
//             <h1>DealMart</h1>
//         </div>

//         <div className="nav-search-wrapper">
//           <Search
//         setSearchDataDb={setSearchDataDb}
//         setSearchFlag={setSearchFlag}
//       />
//         </div>

//         {/* new actions area (toggle placed here) */}
//         <div className="nav-actions">
//           <ThemeToggle />
//         </div>

//         <div >
//             <ul className="nav-sections">
//               <li>
//                 <Link to="/">HOME</Link>
//               </li>
//               <li>
//                 <Link to="/product">PRODUCT</Link>
//               </li>
//               <li>
//                 <Link to="/contact">CONTACT</Link>
//               </li>
//               <li>
//                 <Link to="/about">ABOUT</Link>
//               </li>
//               <li>
//                 <Link to="/signin">LOGIN</Link>
//               </li>

//               <li>
//                 <Link to="/logout">LOGOUT</Link>
//               </li>

//               {
//                 flagAdminLogin && <li>
//                     <Link to="/admin">ADMIN</Link>
//                   </li>
//               }

                  


//             </ul>
//         </div>

//     </div>
    
    
    
    
//     </>
//   )
// }

// export default NavBar


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Search from "../Search/Search";
// import ThemeToggle from "../ThemeContext/ThemeToggle";
// import "./navbar.css";

// function NavBar({ setSearchDataDb, setSearchFlag, flagAdminLogin }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <nav className={`nav-container${menuOpen ? " open" : ""}`}>
//       {/* Logo */}
//       <div className="nav-logo" onClick={closeMenu}>
//         <h1>DealMart</h1>
//       </div>

//       {/* Desktop/Tablet Search Bar (hidden on mobile) */}
//       <div className="nav-search-wrapper">
//         <Search setSearchDataDb={setSearchDataDb} setSearchFlag={setSearchFlag} />
//       </div>

//       {/* Theme toggle + Hamburger menu button */}
//       <div className="nav-actions">
//         <ThemeToggle />

//         <button
//           className="menu-toggle-btn"
//           onClick={toggleMenu}
//           aria-label={menuOpen ? "Close menu" : "Open menu"}
//           aria-expanded={menuOpen}
//         >
//           <span className="hamburger"></span>
//           <span className="hamburger"></span>
//           <span className="hamburger"></span>
//         </button>
//       </div>

//       {/* Mobile slide-in nav menu */}
//       <ul className="nav-sections" onClick={closeMenu}>
//         {/* Mobile-only Search inside toggle menu, above nav links */}
//         <li className="mobile-search-wrapper">
//           <Search setSearchDataDb={setSearchDataDb} setSearchFlag={setSearchFlag} />
//         </li>

//         {/* Nav links */}
//         <li><Link to="/">HOME</Link></li>
//         <li><Link to="/product">PRODUCT</Link></li>
//         <li><Link to="/contact">CONTACT</Link></li>
//         <li><Link to="/about">ABOUT</Link></li>
//         <li><Link to="/signin">LOGIN</Link></li>
//         <li><Link to="/logout">LOGOUT</Link></li>
//         {flagAdminLogin && (
//           <li><Link to="/admin">ADMIN</Link></li>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import ThemeToggle from "../ThemeContext/ThemeToggle";
import "./navbar.css";

function NavBar({ setSearchDataDb, setSearchFlag, flagAdminLogin }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav-container${menuOpen ? " open" : ""}`}>
      {/* Row 1 */}
      <div className="nav-logo" onClick={closeMenu}>
        <h1>DealMart</h1>
      </div>

      <div className="nav-search-wrapper">
        {/* Desktop/tablet search */}
        <Search setSearchDataDb={setSearchDataDb} setSearchFlag={setSearchFlag} />
      </div>

      <div className="nav-actions">
        <ThemeToggle />

        {/* Hamburger menu button */}
        <button
          className="menu-toggle-btn"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
      </div>

      {/* Slide-in nav menu for mobile */}
      <ul className="nav-sections" onClick={closeMenu}>
        {/* Search inside mobile menu */}
        <li className="mobile-search-wrapper">
          <Search setSearchDataDb={setSearchDataDb} setSearchFlag={setSearchFlag} />
        </li>

        {/* Nav links */}
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/product">PRODUCT</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/helpsupport">HELP & SUPPORT</Link></li>
        <li><Link to="/signin">LOGIN</Link></li>
        <li><Link to="/logout">LOGOUT</Link></li>
        {flagAdminLogin && (
          <li><Link to="/admin">ADMIN</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;

