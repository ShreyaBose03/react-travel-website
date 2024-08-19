//  import toursData from "./ToursData";
//  import { useState } from "react";
//  import Details from "./Details";


//  import React from 'react'

//  const Record = () => {
   
//    return (
//     <div>
//         {tourData.map((info)=>{
//             console.log(info);
//             return(
//                 <Details
//               key={info.id}
//               title  ={info.title}
//               description ={info.description}
//               img={info.image}
//                price={info.price}
//                 />

//              );

//         })}
      
//     </div>
//   )
//  }

// export default Record


import React from 'react';
import toursData from './ToursData'; 
import Details from "./Details";

const Record = () => {
  return (
    <div className="tour-list">
      {toursData.map((info) => (
        <Details
          key={info.id}
          title={info.title}
          description={info.description}
          img={info.image}
          price={info.price}
        />
      ))}
    </div>
  );
}

export default Record;




