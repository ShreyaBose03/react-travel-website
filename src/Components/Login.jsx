import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import storageHandler from './Helper/storageHandler';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reduxStore/authSlice';




function LoginForm() {
  const [inputData, setInputData] = useState({ email: '', password: '' });
  const setUser = useOutletContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoginSelector = useSelector(state => state.auth.isLoggedin);

  useEffect(() => {
    if (isLoginSelector) {
      navigate("/about");
    }

  }, [isLoginSelector])


  // useEffect(() => {
  //   if (isLoginSelector) {
  //     const timer = setTimeout(() => {
  //       navigate("/about");
  //     }, 2000); // 2000 milliseconds = 2 seconds

  //     // Cleanup the timer if the component is unmounted or if isLoginSelector changes
  //     return () => clearTimeout(timer);
  //   }
  // }, [isLoginSelector]);



  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData); //displaying data in console 

    const email = inputData.email;
    console.log("email", email);

    const password = inputData.password;
    console.log("password", password);

    dispatch(login({ email, password }))


    //     if (data?.isLoggedin) {
    //         navigate("/about");
    //     }
    //     else{
    //       alert("wrong email & password.please check carefully");

    //     }

  }




  // const loggedUser=JSON.parse(localStorage.getItem("user"));
  // if(inputData.email===loggedUser.email && inputData.password===loggedUser.password)
  //   {
  //     localStorage("loggedIn",true);
  //     navigate("/home");
  //   }
  //   else{
  //     alert("wrong email & password.please check carefully");
  //   }



  // navigate('/about', { state: { email: email, password: password } }); //useLocation

  // navigate(`/about?email=${email}`);//useSearchParams

  // navigate(`/about/${email}`); //useparams



  return (
    <div>
      <div className="image-container" expand="lg">
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <div className="login-container" id="login">
              <div className="top">
                <span>
                  Don't have an account?<Link to="/signup" >Sign Up</Link>
                </span>
                <h1>Login</h1>
              </div>

              <div className="input-box">
                <input
                  type="text"
                  className="input-field"
                  name="email"
                  placeholder="Email"
                  value={inputData.email}
                  onChange={handleData}
                />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  className="input-field"
                  name="password"
                  placeholder="Password"
                  value={inputData.password}
                  onChange={handleData}
                />
              </div>

              <div className="input-box">
                <button type="submit" className="submit" >Submit</button>
              </div>

              <div className="two-col">
                <div className="one">
                  <input type="checkbox" id="login-check" />
                  <label htmlFor="login-check">Remember Me</label>
                </div>
                <div className="two">
                  <label><a href="#">Forgot Password?</a></label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default LoginForm;