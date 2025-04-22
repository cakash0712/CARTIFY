import React, { useEffect, useState } from "react";


function Contact(){
 





  


   return(
     <>
       <h1  style={{marginLeft:"40px",fontSize:"45px",color:"blueviolet"}}>Contact Us:</h1>
       <hr />


       <h2 style={{marginLeft:"100px",fontSize:"40px",color:"royalblue"}}>
       We’re here to help you find the perfect laptop!
       </h2>

       <h3 style={{marginLeft:"120px",fontSize:"30px"}}>
       Have questions about a product, your order, or need expert advice? Our friendly support team is ready to  <br />assist you.

       </h3>
       
       <div style={{display:"flex",marginLeft:"120px"}}>
       <i class="fa fa-phone" aria-hidden="true" style={{marginTop:"22px",color:"red"}}></i>
        <h3 style={{marginLeft:"10px"}}>Phone: +1 (123) 456-7890</h3>
       </div>

       <div style={{display:"flex",marginLeft:"120px"}}>
       <i class="fa fa-envelope" aria-hidden="true" style={{marginTop:"22px",color:"aqua"}}></i>
       <h3 style={{marginLeft:"10px"}}>Email: support@Amazy.com</h3>
       </div>
       
       <div style={{display:"flex",marginLeft:"120px"}}>
       <i class="fa fa-comment" aria-hidden="true"style={{marginTop:"22px",color:"blue"}}></i>
       <h3 style={{marginLeft:"10px"}}>Live Chat: Available 9 AM – 6 PM (Mon–Sat)</h3>
       </div>
       
       <h2 style={{marginLeft:"120px",fontSize:"30px",color:"orangered"}}>Visit Us:</h2>

       <h3 style={{marginLeft:"140px",fontSize:"205x",lineHeight:"30px"}}>Cartify Headquarters <br /> Sasthankarai, Colachel, CA 629251 <br /> Or simply fill out the form below and we’ll get back to you as soon as possible! <br />
       [Contact Form: Name | Email | Message | Submit Button] <br /> Stay connected with us on social media for the latest deals and updates!</h3>

       <br />

       <h3 style={{marginLeft:"120px",fontSize:"30px"}}>
       Let me know if you'd like this adjusted to fit a specific brand name or style!
       </h3>
     
      <br />

      <br />

      <div style={{backgroundColor:"black",width:"100%",height:"150px",display:"flex"}}>
        
        <div>
        <p style={{color:"yellow",paddingTop:"35px",paddingLeft:"40px"}}>🕘 Monday – Saturday: 9:00 AM – 6:00 PM</p>
        <p style={{color:"yellow",paddingTop:"5px",paddingLeft:"40px"}}>🕒 Sunday: Closed</p>
        </div>

        <div style={{textAlign:"left",marginLeft:"1240px"}}>
          <h4 style={{color:"orange"}}>Follow us on:</h4>
          
          <p style={{color:"white"}}>🔗 [Facebook] [Twitter] [Instagram] [LinkedIn]</p>
          
          <p style={{color:"red"}}><span style={{color:"white",marginLeft:"2px"}}>©</span> 2025 Cartify. All rights reserved.</p>

        </div>
        

      </div>
     
     
     </>






   )

}


export default Contact