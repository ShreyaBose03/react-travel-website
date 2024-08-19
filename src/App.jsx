import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/NavigationBar/Header';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
// import Blog from './Components/Blog';
import About from './Components/About';
import Layout from './Components/Layout/Layout';
// import AuthHeader from './Components/NavigationBar/AuthHeader';
import UnAuth from './ProtectedRoute/UnAuth';
import WithAuth from './ProtectedRoute/WithAuth';
import Tours from './Components/Tours';
import Services from './Components/Services';
import Details from './Components/Details';
import ContactUs from './Components/ContactUs';
import Cart from './Components/Cart';
import PurchaseSuccess from './Components/PurchaseSuccess';
import './Mainpage_style.css';
import './Style.css';
import './Design.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />} >

          <Route path="/login" element={<UnAuth><Login /></UnAuth>} />
          <Route path="/signup" element={<UnAuth><Signup /> </UnAuth>} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/contacts" element={contact} */}
          <Route path="/about" element={<WithAuth> <About /> </WithAuth>} />
          <Route path="/tours" element={<WithAuth><Tours /></WithAuth>} />
          <Route path="/" element={<UnAuth><Signup /> </UnAuth>} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          

          {/* <Route path="/cart/:id" element={<Cart />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchase" element={<PurchaseSuccess />} />

          <Route path="/details/:toursId" element={<WithAuth><Details /></WithAuth>} />
          {/* <Route path="/details" element={<Details />} /> */}

        </Route>
      </Routes>
    </>
  );
}

export default App;




