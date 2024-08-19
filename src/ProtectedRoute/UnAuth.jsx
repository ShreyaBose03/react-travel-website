  import React from 'react';
  import { Navigate } from "react-router-dom";
  import { useSelector } from 'react-redux';
  const UnAuth = ({ children }) => {
      const isLoggedin = useSelector(state=>state.auth.isLoggedin)
      if (!isLoggedin) {
          return <>{children}</>
      }
      else {
          return <Navigate to="/about" replace />
    }
  }


   export default UnAuth;


