import React, { Fragment, useState } from "react";
import hero from "../../images/hero.jpg";

const Hero = () => {
 const onSubmit = (e) => {
  e.preventDefault();
 };

 return (
  <Fragment>
   <div className='grid-hero'>
    <div className='overlay'>
     <p
      style={{
       backgroundColor: "black",
       zIndex: "1",
       height: "42vw",
       opacity: "27.8%",
      }}>
      {" "}
      <img
       src={hero}
       alt=''
       style={{ position: "absolute", top: "0", zIndex: "-1" }}
      />
     </p>
    </div>
   </div>
  </Fragment>
 );
};

export default Hero;
