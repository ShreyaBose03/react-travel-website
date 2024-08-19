import React from 'react';
import CardItem from './CardItem';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Services = () => {
  const navigate=useNavigate();
  const goToDetails=(page)=>{
    navigate("page");
  }
  return (
    <div>
      
        <h1 className='services'>SERVICES</h1>
        
      <section className='heading'>
        <h2><i>Activities we think you would enjoy</i></h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            
            <CardItem
              src="https://afar.brightspotcdn.com/dims4/default/68ef509/2147483647/strip/false/crop/1440x720+0+0/resize/1440x720!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fcf%2F8a%2F20b4a2c544a58be93512ad67084c%2Fbohler-japankk-4006.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
               path="/tours"
            ></CardItem> 
            
            <CardItem
              src="https://static.toiimg.com/thumb/msid-81248005,width-748,height-499,resizemode=4,imgsize-583045/.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/tours"
              
            ></CardItem>
            <CardItem
              src="https://miro.medium.com/v2/resize:fit:1400/1*HRcVRb4AmLrt5E0gANvWcA.jpeg"
              text="Experience Football on Top of the Himalayan Mountains"
              label="Adventure"
              path="/tours"
            ></CardItem>
            <CardItem
              src="https://www.planetware.com/wpimages/2019/12/united-states-in-pictures-beautiful-places-to-photograph-new-york-brooklyn-bridge.jpg"
              text="Set a Sail in the Atlantic ocean visiting Uncharted Waters"
              label="Mystery"
              path="/tours"
            ></CardItem>
            <CardItem
              src="https://hips.hearstapps.com/hmg-prod/images/dunes-in-the-sahara-desert-merzouga-morocco-royalty-free-image-1695321159.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/tours"
            ></CardItem>
          </ul>
          </div>
        </div>
      </section>

      <section className='heading'>
        <h2><i>Explore these destinations</i></h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="https://static.toiimg.com/thumb/msid-81248005,width-748,height-499,resizemode=4,imgsize-583045/.jpg"
    
              text="Munnar,Kerala"
              label="Kerala,India"
              path="/tours"
            ></CardItem>
            <CardItem 
              src="https://www.travelinindia.tours/UPLOAD/SLIDESHOW/191-Tour-Jaipur.jpg"
              text="Jaipur,Rajasthan"
              label="Jaipur,Rajasthan"
              path="/tours"
            ></CardItem>
            <CardItem 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqB3zrDUMSov4VfYn5ZdPhFioowPhJIoROvw&s"
              text="Machu Picchu,Peru"
              label="Peru"
              path="/tours"
            ></CardItem>
            <CardItem 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAAfv72y7XuBCqqfzthG2kpaoejvq87dnuUQ&s"
              text="Thimpu,Bhutan"
              label="Bhutan"
              path="/tours"
            ></CardItem>
            <CardItem 
              src="https://www.intrepidtravel.com/adventures/wp-content/uploads/2015/09/switz-lead-image.jpg"
              text="Zurich,Switzerland"
              label="Switzerland"
              path="/tours"
            ></CardItem>
             <CardItem 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Houseboats%2C_Dal_Lake%2C_Kashmir.jpg"
              text="Srinagar,Kashmir,"
              label="Kashmir"
              path="/tours"
            ></CardItem>
              <CardItem 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUSeNuIsCp40EhCAyqSYWN5JhncRVRZ4J5NA&s"
              text="Tokyo,Japan"
              label="Japan"
              path="/tours"
            ></CardItem>
             /* <CardItem 
              src="https://staticimg.amarujala.com/assets/images/2023/04/11/irctc-sikkim-tour-package_1681216652.jpeg"
              text="Peling,Sikkim"
              label="Sikkim"
              path="/tours"
            ></CardItem>  
          </ul>
          </div>
        </div>
      </section>
      <Footer />
  
  
      
    </div>
  )
}

export default Services;

// import React from 'react';
// import { Card, Button } from 'react-bootstrap';
// import Footer from './Footer';
// import AuthHeader from './NavigationBar/AuthHeader';

// const Services = () => {
//   return (
//     <div>
//       <h1 className='services'>SERVICES</h1>

//       <section className='heading'>
//         <h2>Activities we think you would enjoy</h2>
//         <div className='services-container'>
//           <div className='services-wrapper'>
//             <div className='row'>
//               <div className='col-md-4'>
//                 <Card style={{ width: '18rem' }}>
//                   <Card.Img variant='top' src='https://media.istockphoto.com/id/1137578281/photo/fuji-mountain-and-cherry-blossoms-in-spring-japan.jpg?s=612x612&w=0&k=20&c=H4T0916_yYJTjeKAaaLmYoQY3OMmaFShks6RfpYYVf4=' />
//                   <Card.Body>
//                     <Card.Title>Adventure</Card.Title>
//                     <Card.Text>
//                       Explore the hidden waterfall deep inside the Amazon Jungle
//                     </Card.Text>
//                     <Button variant='primary' href='/services/details'>Read More</Button>
//                   </Card.Body>
//                 </Card>
//               </div>

//               <div className='col-md-4'>
//                 <Card style={{ width: '18rem' }}>
//                   <Card.Img variant='top' src='img-2.jpg' />
//                   <Card.Body>
//                     <Card.Title>Luxury</Card.Title>
//                     <Card.Text>
//                       Travel through the Islands of Bali in a Private Cruise
//                     </Card.Text>
//                     <Button variant='primary' href='/services/details'>Read More</Button>
//                   </Card.Body>
//                 </Card>
//               </div>

//               <div className='col-md-4'>
//                 <Card style={{ width: '18rem' }}>
//                   <Card.Img variant='top' src='img-4.jpg' />
//                   <Card.Body>
//                     <Card.Title>Adventure</Card.Title>
//                     <Card.Text>
//                       Experience Football on Top of the Himalayan Mountains
//                     </Card.Text>
//                     <Button variant='primary' href='/services/details'>Read More</Button>
//                   </Card.Body>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className='heading'>
//         <h2>Explore these destinations</h2>
//         <div className='services-container'>
//           <div className='services-wrapper'>
//             <div className='row'>
//               <div className='col-md-4'>
//                 <Card style={{ width: '18rem' }}>
//                   <Card.Img variant='top' src='destination-1.jpg' />
//                   <Card.Body>
//                     <Card.Title>Europe</Card.Title>
//                     <Card.Text>
//                       Budapest, Hungary
//                     </Card.Text>
//                     <Button variant='primary' href='/services/details'>Read More</Button>
//                   </Card.Body>
//                 </Card>
//               </div>

//               <div className='col-md-4'>
//                 <Card style={{ width: '18rem' }}>
//                   <Card.Img variant='top' src='destination-2.jpg' />
//                   <Card.Body>
//                     <Card.Title>Europe</Card.Title>
//                     <Card.Text>
//                       Lisbon, Portugal
//                     </Card.Text>
//                     <Button variant='primary' href='/services/details'>Read More</Button>
//                   </Card.Body>
//                 </Card>
//               </div>

//               <div className='col-md-4'>
//                 <Card style={{ width: '18rem' }}>
//                   <Card.Img variant='top' src='destination-3.jpg' />
//                   <Card.Body>
//                     <Card.Title>Europe</Card.Title>
//                     <Card.Text>
//                       Berlin, Germany
//                     </Card.Text>
//                     <Button variant='primary' href='/services/details'>Read More</Button>
//                   </Card.Body>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }

// export default Services;
