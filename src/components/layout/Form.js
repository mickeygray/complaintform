import React, { Fragment, useState, useEffect } from "react";

const Form = () => {
 return (
  <Fragment>
   <div className='container all center'>
    <h5>
     Thank you for responding to our Email. Please fill out this form and we
     will have a representative from the office reach out to out about your
     experience either recieving threatening letters or doing business with
     American Tax Solutions or other similar fraudulent tax relief companies.{" "}
    </h5>
    <form
     className='card bg-primary'
     style={{ width: "30rem", margin: "auto" }}>
     <h5>Please Provide some basic details about your complaint</h5>
     <input type='text' placeholder='name' name='name' />

     <input type='text' placeholder='phone' name='phone' />

     <input type='email' placeholder='e-mail' name='email' />

     <input type='text' placeholder='city' name='city' />

     <input type='text' placeholder='state' name='state' />
     <textarea placeholder='more info' />
     <input className='btn btn-sm btn-light' type='submit' value='Contact Us' />
    </form>
   </div>
  </Fragment>
 );
};

export default Form;
