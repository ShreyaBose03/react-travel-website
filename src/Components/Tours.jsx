import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import './Tours.css';
import CardData from './CardData';
import { useNavigate } from 'react-router-dom';
import Details from './Details';
//   <style>
// @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

//  </style> 

<style>
@import url('https://fonts.googleapis.com/css2?family=Gupter:wght@400;500;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
</style>


const Tours = () => {

  const navigate=useNavigate();
  // const goToDetails=(tourId)=>{
  //   navigate(`/details/${tourId}`);

  // }

  


 


  return (
    <div className="cardItem container-fluid">

      <h1 className="heading_align">Explore your favourite Holiday Destination</h1>
      <Row className="mb-4 d-flex align-items-stretch">
      {CardData.map((data)=>(
       <Col key={data.id} lg={4} md={6} sm={12} className='bg-transparent p-4'>
        <Card className="shadow-sm h-100 ">
          <Card.Img variant="top" src={data.img} />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="text-center" style={{fontSize:25,fontWeight:200}}>{data.title}</Card.Title>
            <Card.Text className=" md-3">
             {data.description}<br/>
          <p style={{fontSize:23,fontWeight:"bold",color:"maroon",padding:15}}> Price:₹{data.price}</p>  
            </Card.Text>
            <Button variant="primary"><Link to={`/details/${data.id}`} className='text-decoration-none' style={{  color: 'white',fontSize:'20px'}}>View Details</Link></Button>
          </Card.Body>
        </Card>
        </Col>
      ))}

        </Row>
        </div>
  )
}
export default Tours;

{/* <Link to={`/cart/${data.id}`} className='text-decoration-none' style={{  color: 'white',fontSize:'20px'}} onClick={()=>send(data)}></Link> */}
{/* <Link to="/details" className='text-decoration-none' style={{  color: 'white',fontSize:'20px'}}  >View Details</Link> */}
{/* <Button variant="primary" ><Link to="/cart" className='text-decoration-none' style={{  color: 'white',fontSize:'20px'}} onClick={()=>send(data)}>View Details</Link></Button> */}



{/* <Link to={`/details/${data.id}`}></Link> */}
        





 
