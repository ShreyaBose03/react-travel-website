import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../reduxStore/CartSlice';
import Footer from './Footer';
import ToursData from './ToursData'; 

const Details = () => {
  // const [data, setData] = useState(null);
  const dispatch=useDispatch();
  const { toursId } = useParams();

  const destination = ToursData.destinations.find((dest) => dest.id.toString() === toursId);  

  //add to cart

  const send=(e)=>{
    console.log(e);
    dispatch(addToCart(e));
  }

  //  useEffect(() => {
  //    // Find the destination based on tourId
  //   const destination = ToursData.destinations.find((dest) => dest.id.toString() === toursId);  
  //   setData(destination);
  //  }, [toursId]);




  // // Handle case when data is not yet loaded or not found
  // if (!data) {
  //   return <div>Loading...</div>;
  // }




  // useEffect(() => {
  //   // Log to verify ToursData and destinations
  //   console.log('ToursData:', ToursData);
  //   console.log('ToursData.destinations:', ToursData.destinations);

  //   // Find the destination based on tourId
  //   if (ToursData && ToursData.destinations) {
  //     const destination = ToursData.destinations.find(dest => dest.id.toString() === tourId);
  //     setData(destination);
  //   }
  // }, [tourId]);

  // // Handle case when data is not yet loaded or not found
  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>

      {/* <h1>{toursId}</h1> */}
       <div className='details'>
        <img src={destination.image} alt={destination.title} />
      </div>
      <div className='details-container'>
        <div className='info-wrapper'>
          <h2 style={{textAlign:"justify",padding:10}}>{destination.title}</h2>
          <p style={{textAlign:"justify"}}>{destination.description}</p>

        
          {destination.tour_plan && (
            <>
              {/* <h3>Experience</h3> */}
              <h4 style={{textAlign:"justify",fontWeight:"bold",fontSize:32}}>Highlights:</h4>
              <ul style={{textAlign:"justify"}}>
               <li> {destination.tour_plan.line_1}</li>
               <li> {destination.tour_plan.line_2}</li>
               <li>{destination.tour_plan.line_3}</li>
               <li>{destination.tour_plan.line_4}</li>
               <li>{destination.tour_plan.line_5}</li>
               <li>{destination.tour_plan.line_6}</li>
               <li>{destination.tour_plan.line_7}</li>
               <li>{destination.tour_plan.line_8}</li> 
               <li>{destination.tour_plan.line_9}</li>
               <li>{destination.tour_plan.line_10}</li>



                
              </ul>
              {/* <h4>Full description</h4> */}
              <p></p>
            </>
          )}
        </div>

        <div className='booking-container'>
          <div className='booking-wrapper'>
            <section className='booking-info'>
              <h5>From</h5>
              <p className='price'>{destination.price}</p>
              <p className='per-person'>per person</p>
            </section>
            <button type='button' className='btn-book' onClick={()=>send(destination)}>Book now</button>
          </div>
        </div>

      </div>
      <Footer /> 
    </div>
  );
};

export default Details;
