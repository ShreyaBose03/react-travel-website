import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';




const AuthHeader = ({ logout }) => {
  const user = useSelector(state => state.auth.user);
   const navigate=useNavigate();

   const {carts}=useSelector((state)=>state.allCart);
   console.log(carts);

  const handleCart=()=>{
    navigate("/cart");
  }

  return (
    <div>
      <div className="header">
        <nav className="nav">
          <div className="nav-logo">
            <p> tours-travels</p>
          </div>
          <div className="nav-items">
            <ul>
              <Link to="home" className="link">Home &nbsp; </Link>
              {/* <Link to="/services" className="link" >Services &nbsp; </Link> */}
              <Link to="/contact" className="link" >Contact Us &nbsp; </Link>
              {/* <Link to="/blog" className="link"> Blog &nbsp; </Link>  */}
              <Link to="/about" className="link"> About &nbsp; </Link>
              <Link to="/tours" className="link"> Tours &nbsp; </Link>
              <Link to="/services" className="link" >Services &nbsp; </Link>
              {/* <Link to="/details" className="link"> Details &nbsp; </Link> */}
              <Link to="/cart" className="link"> Cart &nbsp; </Link>
              {/* <Link to="/purchase" className="link"> purchase &nbsp; </Link> */}


              {/* <Link to="/details" className="link"> Details &nbsp; </Link> */}

            </ul>
          </div>
          <div className="navigation-button">
            {/* <button className="btn" id="loginBtn" onClick={()=>goTo("login")}>Sign In</button>
            <button className="btn" id="registerBtn" onClick={()=>goTo("signup")}>Sign Up</button> */}
            {/* <Link to="/about" > </Link> */}
            <div>
            <b><font color="white"> {user?.email}</font> </b>
            </div>
            <div>
              <Link to="/cart" className="text-decoration-none text-light mx-2">
            <Badge badgeContent={carts.length} color="success">
              <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 38, cursor: "pointer"}} onClick={handleCart}></i>

            </Badge>
            </Link>
            </div>
            <div>
            <button className="btn" id="logOut" onClick={logout}> Logout </button>
            </div>
          </div>
          <div className="nav-items-btn">
          </div>
        </nav>
      </div>
    </div>
  )
}

export default AuthHeader;




