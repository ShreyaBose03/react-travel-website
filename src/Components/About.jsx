// import { useSelector } from "react-redux";
// import React from 'react'


// const About = () => {
//   const user = useSelector(state => state.auth.user)
// return <h1>{user?.email}</h1>
// }
// export default About;

import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import './About.css';

const About = () => {
  return (
    <div>
       <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 image-1" style={{marginTop:45}}>
            <div className="col-6 mt-5 text-white text_align ms-4">
              <h1 style={{ fontSize: '4rem' }}>Wander.Explore.Discover.</h1>
              <p>
                Travel is the art of seeing the world with fresh eyes, discovering beauty in the unfamiliar and finding joy in the journey.In every journey, there is a story waiting to be lived, a lesson to be learned, and a memory to be cherished
              </p>
              <button className="btn btn-danger p-3 text-white distance upper-button" id="btn_1" type="button" >
               <Link to="/contact" style={{textDecoration:"none",color:"white"}}>Book a call</Link>
              </button>
            </div>
            {/* <div className="d-grid gap-2 d-md-block ms-4">
             
            </div> */}
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row mt-4 d-flex gap-auto">
          <div className="col-lg-6 col-sm-12 mt-5 left_align">
            <h2>About Travelling</h2>
            <p>
            Traveling is more than just moving from one place to another; it is a profound journey that enriches the soul and broadens the mind. It allows us to step out of our comfort zones and experience the world in its myriad forms—each destination offering new perspectives, cultures, and experiences. Whether it's the thrill of exploring uncharted territories, the peace of immersing in nature's beauty, or the joy of meeting new people, travel has a way of making us feel alive and connected to the world. It teaches us that the world is both vast and intimate, full of wonders waiting to be discovered and stories waiting to be lived. Traveling reminds us that life is not just about the destination, but the moments and memories we collect along the way.</p>
            <div className="d-grid gap-2 d-md-block ms-5">
              <button className="btn p-3 border_line fw-bold middle-button" type="button">
               <Link to="/services" style={{textDecoration:"none"}} >Learn more</Link>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 mt-5">
            <div className="image-2"></div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 text-white alignment">
              <p>
                "Traveling is more than a physical journey from one place to another; it is a profound exploration of the self and the world around us. At its core, travel embodies the philosophy that life is not meant to be lived in one place, confined by the familiar, but rather experienced in its full, diverse richness. It is an act of curiosity, a desire to connect with something greater than our daily routines and comforts. Through travel, we encounter new cultures, landscapes, and perspectives that challenge our assumptions and broaden our understanding of what it means to be human."
              </p>
              <p>— Ibn Battuta</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row d-flex lg-justify-content-between justify-content-md-around">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card col-12">
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/1*Ju6UqjqVKhavEOhqVbFSgw.jpeg"
                className="card-img-top"
                alt="shreya"
              />
              <div className="card-body">
                <h3 className="card-title">Cultural Appreciation</h3>
                <p className="card-text">
                By experiencing different traditions and lifestyles, you gain a deeper appreciation for diversity and global cultures.New environments and experiences can spark creativity.
                </p>
                <Link to="/tours" className="btn btn-primary card-button">
                  Learn more
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card col-12">
              <img
                src="https://rwrant.co.za/wp-content/uploads/2023/02/Reflection-Travel-scaled.jpg"
                className="card-img-top"
                alt="shreya"
              />
              <div className="card-body">
                <h3 className="card-title">Personal Growth</h3>
                <p className="card-text">
                It challenges you to step out of your comfort zone,fostering independence,confidence,and resilience.Experiencing different ways of life can foster empathy
                </p>
                <Link to="/tours" className="btn btn-primary card-button">
                  Learn more
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
            <div className="card col-12">
              <img
                src="https://dev2.uplist.lk/wp-content/uploads/2022/08/world_travel_brave.jpg"
                className="card-img-top"
                alt="shreya"
              />
              <div className="card-body">
                <h3 className="card-title">Adventure and Fun</h3>
                <p className="card-text">
                Ultimately, travel is a way to seek adventure,to take a break from your routine, relax, and recharge, reducing stress  have fun, and create moments of joy and excitement.
                </p>
                <Link to="/tours" className="btn btn-primary card-button">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/> 
      
    </div>
  )
}

export default About







 
