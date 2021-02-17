import React from 'react'
import {
    Card
  } from 'reactstrap';
import Reviews from '../Pages/Reviews';
import image1 from '../Images/image1.jpeg';
import image2 from '../Images/image2.jpeg';
import image9 from "../Images/image9.jpeg";
import image4 from '../Images/image4.jpeg';
import image5 from '../Images/image5.jpeg';
import image6 from '../Images/image6.jpeg';
import image7 from '../Images/image7.jpeg';
import image8 from '../Images/image8.jpeg';

function Images() {
    return (
      <>
     <div className="body">
       <h2>Here you will find some of my work!</h2>
       <h3>Feel free to leave some feedback in the Commments!</h3>
     <div className="one">
      <Card>
        <img width="300" height="300" src={image1} alt="Card image cap" />
      </Card>
     </div>

      <div className="two">
      <Card>
        <img width="300" height="300" src={image2} alt="Card image cap" />
      </Card> 
     </div>

     <div className="one">
     <Card>
        <img width="300" height="300" src={image9} alt="Card image cap" />
      </Card>
     </div>

      <div className="two">
      <Card>
        <img width="300" height="300" src={image4} alt="Card image cap" />
      </Card>
      </div>
      
      <div className="one">
      <Card>
        <img width="300" height="300" src={image5} alt="Card image cap" />
      </Card>
      </div>

      <div className="two">
      <Card>
        <img width="300" height="300" src={image6} alt="Card image cap" />
      </Card>
      </div>

      <div className="one">
      <Card>
        <img width="300" height="300" src={image7} alt="Card image cap" />
      </Card>
      </div>

      <div className="two">
      <Card>
        <img width="300" height="300" src={image8} alt="Card image cap" />
      </Card>
      </div>
     </div>
     <div className="Reviews">
        <Reviews />
      </div>
     </>
    )
}

export default Images;