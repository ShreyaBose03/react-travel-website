import { Outlet, useNavigate } from "react-router-dom";
import Header from "../NavigationBar/Header";
import AuthHeader from "../NavigationBar/AuthHeader";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../reduxStore/authSlice";
import { useEffect } from "react";

const Layout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedin= useSelector(state => state.auth.isLoggedin);


    const applogout = () => {
        dispatch(logout());
        navigate("/login")
    }
    useEffect(()=>{
        if(isLoggedin)
        {

            document.body.style.backgroundImage=`url("https://wallpapers.com/images/featured/blank-white-background-xbsfzsltjksfompa.jpg")`;

        }
        else{
             document.body.style.backgroundImage=`url("https://i0.wp.com/free4kwallpapers.com/uploads/wallpaper/wide-minimalistic-landscape-wallpaper-1920x1080-wallpaper.jpg")`;
            // document.body.style.backgroundColor="white";

            
        }
    

    },[isLoggedin])

    return (
        <>


            {isLoggedin ? <AuthHeader logout={applogout} /> : <Header />}
            <Outlet />
            
        </>
    )
}

export default Layout;



