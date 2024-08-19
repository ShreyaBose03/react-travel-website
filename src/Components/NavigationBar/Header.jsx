import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';


function Header() {
  
const navigate = useNavigate();
  const goTo = (page) => {
    navigate(page)
  }
  return (
    <div>
      <div className="header">
        <nav className="nav">
          <div className="nav-logo">
            <p><i className="fab fa-gripfire"></i>tours-travels</p>
          </div>
          <div className="nav-items">
            <ul>

              <Link to="/home" className="link">Home &nbsp; </Link>
              <Link to="/contact" className="link" >Contact Us &nbsp; </Link>
              {/* <Link to="/blog" className="link"> Blog &nbsp; </Link> */}
              <Link to="/about" className="link"> About &nbsp; </Link>
              <Link to="/tours" className="link"> Tours &nbsp; </Link>
              <Link to="/services" className="link"> Services &nbsp; </Link>
              {/* <Link to="/details" className="link"> Details &nbsp; </Link> */}
              {/* <Link to="/cart" className="link"> Cart &nbsp; </Link> */}
              {/* <Link to="/purchase" className="link"> purchase &nbsp; </Link> */}


            </ul>

          </div>
          <div className="nav-button">
            <button className="btn" id="loginBtn" onClick={() => goTo("login")}>Sign In</button>
            <button className="btn" id="registerBtn" onClick={() => goTo("signup")}>Sign Up</button>

          </div>
          <div className="nav-items-btn">
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header

