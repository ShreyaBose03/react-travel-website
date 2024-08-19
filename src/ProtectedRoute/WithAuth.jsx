import React from 'react';
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const WithAuth = ({children}) => {
    const isLoggedin=useSelector(state=>state.auth.isLoggedin);
    if(isLoggedin){
        return<>{children}</>
    }
    else{
        return<Navigate to="/login" replace/>
    }
}
 

export default WithAuth;

