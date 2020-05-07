import React, { Fragment } from "react";
import Hero from "../layout/Hero";
import Form from "../layout/Form";

const Home = () => {
 return (
  <Fragment>
   <div style={{ position: "absolute", top: "0", zIndex: "-999" }}>
    <Hero />
   </div>
   <div className='all-center' style={{ width: "66vw" }}>
    <Form />
   </div>
  </Fragment>
 );
};

export default Home;
