import React, { useEffect, useState } from "react";


function About(){
  
   return(
     <>
    
    <h1 style={{marginLeft:"40px",fontSize:"45px",color:"blueviolet"}}>About Us:</h1>
    <hr />
     
    <h3 style={{marginLeft:"160px",fontSize:"40px"}}>Welcome to Cartify – your ultimate destination for buying laptops online!</h3>

    <h4 style={{marginLeft:"220px",lineHeight:"42px",fontSize:"25px",color:"gray"}}>
    At Cartify, we believe in making technology accessible, reliable, and affordable. Whether you're a student,<br /> a gamer, a creative professional, or just looking for a dependable laptop for everyday use, we've got  <br />something for everyone.
    </h4>

    

    <h4 style={{marginLeft:"220px",lineHeight:"32px",fontSize:"25px",color:"gray"}}>
    We partner with top brands and trusted suppliers to bring you a wide range of laptops – from budget- <br />friendly options to high-performance machines. Every product is handpicked to ensure quality, and our goal <br /> is to help you make the right choice with ease.
    </h4>
     
     <h2 style={{marginLeft:"200px",lineHeight:"30px",color:"red",fontSize:"30px"}}>

     Why choose us?
     </h2>

      <ol style={{marginLeft:"200px",lineHeight:"35px",fontSize:"20px"}}>
        <div style={{display:"flex"}}>
        <div style={{width:"3px",height:"3px",color:"black",border:"2px solid black",backgroundColor:"black",borderRadius:"50px",marginTop:"15px"}}></div>
        <li style={{marginLeft:"5px"}}>Wide Selection: Laptops for work, gaming, design, and more.</li>
        </div>
        <div style={{display:"flex"}}>
        <div style={{width:"3px",height:"3px",color:"black",border:"2px solid black",backgroundColor:"black",borderRadius:"50px",marginTop:"15px"}}></div>
        <li  style={{marginLeft:"5px"}}>Competitive Prices: Great deals and seasonal discounts.</li>
        </div>
        <div style={{display:"flex"}}>
        <div style={{width:"3px",height:"3px",color:"black",border:"2px solid black",backgroundColor:"black",borderRadius:"50px",marginTop:"15px"}}></div>
        <li  style={{marginLeft:"5px"}}>Trusted Support: Expert advice and responsive customer service.</li>
        </div>
        <div style={{display:"flex"}}>
        <div style={{width:"3px",height:"3px",color:"black",border:"2px solid black",backgroundColor:"black",borderRadius:"50px",marginTop:"15px"}}></div>
        <li  style={{marginLeft:"5px"}}>Fast & Secure Shipping: Get your laptop delivered safely and quickly.</li>
        </div>
      </ol>


          <h4 style={{marginLeft:"200px",lineHeight:"35px",fontSize:"25px"}}>
          At Cartiy, we’re more than just an online store – we’re your tech partner. Shop with confidence and let us <br /> help you power up your digital life.
          </h4>


          <h4 style={{marginLeft:"200px",lineHeight:"30px",fontSize:"25px"}}>Would you like to customize it for a specific brand, audience, or tone (e.g., more formal, playful, etc.)?</h4>
     
     </>






   )

}


export default About