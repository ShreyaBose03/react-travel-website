import React from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  let navigate = useNavigate();

  const routeChange = () => { 
    let path = '/services'; 
    navigate(path);
  }
  return (
    <div>
       <div className="home-container ">
        <video src="public\videos\video-1.mp4" autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
      {/* <h1><font color="purple">WELCOME HOME</font></h1> */}
       <form className='search'>
          <div className='search-container'>
            <label >Where are you going?</label>
            <input id='location' type='text' placeholder='Search your location' />
          </div>
          <div className='row-container'>

            <div className='search-container'>
              <label>Check in</label>
              <input id='check-in' type='date' />
            </div>
            <div className='search-container'>
              <label>Check out</label>
              <input id='check-out' type='date' />
            </div>

          </div>
          <div className='search-container'>
              <button
                className='hero-btn'
                type='submit'
                onClick={routeChange}
              >
                Explore
              </button>
          </div>
      </form>
      
      
      </div> 
      
    </div>
    
  )
}
<Footer/>

export default Home


