import React from 'react'
import "./CartDesign.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PurchaseSuccess = () => {
  return (
    <div>
      <div className="container alignment-box">
        <div className="jumbotron my-5">
          <h1 className="display-4 bckgrnd">Thank you !</h1>
          <p className="lead">Your purchase order is successfully placed.</p>
          <hr className="my-4" />
          <p>Thank you for using our Website. Please visit us again.</p>
          <Button variant="primary btn-lg px-5" role="button"><Link to="/tours" style={{textDecoration:"none",color:"white"}}>Book More</Link></Button>
        </div>
      </div>

    </div>
  )
}

export default PurchaseSuccess;

// className="btn btn-primary btn-lg px-5"
