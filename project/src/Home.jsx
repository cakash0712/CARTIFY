
import { Link, useNavigate } from "react-router-dom";
import  './Home.css';
import { useContext, useState } from "react";
import Mycontext from "./Mycontext";







function Home(){
  const[x,setx]=useState([{model:"SAMSUNG Galaxy Book5 Pro AI PC Full Metal Chasis Intel Core Ultra 5 226V - (16 GB/512 GB SSD/Windows 1...",price:"₹1,31,990",ac1:"Intel Core i5 Processor(13th Gen)",ac2:"16 GB LPDDR4X RAM",ac3:"Windows 11 operating system",
    ac4:"512 GB SSD",ac5:"39.62cm Display",ac6:"1 Year Manufacturer Warranty for Laptop and 6 monthhs for in Box- Acessories",
    image2:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/d/4/-original-imaha9gqfarm6w2a.jpeg?q=70",emi:"₹580/month",det:"36 months EMI Plan with BOBCARD",img1:"https://m.media-amazon.com/images/I/71va8MZ-bGL._SL1500_.jpg",img2:"https://m.media-amazon.com/images/I/71JqqstzWwL._SL1500_.jpg",img3:"https://m.media-amazon.com/images/I/81yX+QxMeFL._SL1500_.jpg",img4:"https://m.media-amazon.com/images/I/81iKQw2TIGL._SL1500_.jpg",img5:"https://m.media-amazon.com/images/I/61a6csF9O5L._SL1500_.jpg",fmodel:"SAMSUNG Galaxy Book5 360 AI PC Full Metal Chasis Intel Core Ultra 7 258V - (32 GB/1 TB SSD/Windows 11 Home) NP750QHA 2 in 1 Laptop  (15.6 Inch, Gray, 1.46 Kg, With MS Office)",sprice:"₹1,85,990",off:"22% off",
    desc:"Experience a new level of transformative AI performance with the super-fast Intel Core Ultra processor (Series 2), upgraded graphics and an advanced NPU capable of up to 47 TOPS. Harness all that power to blaze through heavy workloads, video editing and easily complete AI-intensive tasks with incredible speed"



  },
  {model:"SAMSUNG Galaxy Book4 Metal Intel Core i5 13th Gen 1335U - (16 GB/512 GB SSD/Windows 11 Home) NP750XGJ-...",price:"₹59,990",ac1:"Intel Core i5 Processor (13th Gen)"
,ac2:"16 GB LPDDR4X RAM",ac3:"Windows 11 Operating System",
  ac4:"512 GB SSD",ac5:"39.62cm Display",ac6:"1 Year Manufacturer Warranty for Laptop and 6 Months for In-Box Accessories",
  image2:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/3/g/m/-original-imah3xrqttkdbss4.jpeg?q=70",emi:"₹579/month",det:"36 months EMI Plan with BOBCARD",img1:"https://m.media-amazon.com/images/I/71KMP-d7kiL._SL1500_.jpg",img2:"https://m.media-amazon.com/images/I/71JqqstzWwL._SL1500_.jpg",img3:"https://m.media-amazon.com/images/I/71nXFhomQIL._SL1500_.jpg",img4:"https://m.media-amazon.com/images/I/71ReouRyojL._SL1500_.jpg",img5:"https://m.media-amazon.com/images/I/51+j2MfOl2L._SL1500_.jpg",fmodel:"SAMSUNG Galaxy Book4 Metal Intel Core i3 13th Gen 1315U - (8 GB/512 GB SSD/Windows 11 Home) NP750XGJ-LG4IN Thin and Light Laptop  (15.6 Inch, Gray, 1.55 Kg, With MS Office)",sprice:"₹86,239",off:"31% off",desc:"Galaxy Book4 is encased in a full metal body that weighs just 1.55 kg, so it's sleek, compact and ready to go. And with a large 39.62 cm Full HD display, you can enjoy a crisp and vibrant picture onscreen while you unwind with your favorite clips and flicks."},{model:"ASUS ZenBook 14 Intel Core i5 8th Gen 8265U - (8 GB/512 GB SSD/Windows 10 Home) UX433FA-A6106T Thin an..."
,price:"₹56,999",ac1:"Intel Core i5 Processor (8th Gen)"
,ac2:"8 GB LPDDR3  RAM",ac3:"Windows 10 Operating System",
    ac4:"512 GB SSD",ac5:"35.56cm Display",ac6:"1 Year Onsite Warranty",
    image2:"https://rukminim2.flixcart.com/image/312/312/jraycnk0/computer/w/z/y/asus-na-thin-and-light-laptop-original-imafd3g96rxzxgkn.jpeg?q=70",emi:"₹520/month",det:"36 months EMI Plan with BOBCARD",img1:"https://m.media-amazon.com/images/I/71-xVn67CeS._SL1500_.jpg",img2:"https://m.media-amazon.com/images/I/512Q4gSqR9S._SL1500_.jpg",img3:"https://m.media-amazon.com/images/I/71RRiRac8hS._SL1500_.jpg",img4:"https://m.media-amazon.com/images/I/41qxMOZ29wS._SL1500_.jpg",img5:"https://m.media-amazon.com/images/I/4178o2rJv8S._SL1500_.jpg",fmodel:"ASUS ZenBook 14 Intel Core i5 8th Gen 8265U - (8 GB/512 GB SSD/Windows 10 Home) UX433FA-A6106T Thin and Light Laptop  (14 inch, Icicle Silver, 1.19 kg)",sprice:"₹79,999",off:"30% off",desc:"With this laptop from ASUS, you can boost your productivity as it lets you do a lot more effortlessly. It features a 4-sided NanoEdge Display and a light chassis in a sleek profile, making it highly portable. The High-resolution Display, along with exclusive ASUS technologies, such as the ASUS Splendid and ASUS Tru2Life Video, makes everything on its screen captivating."},{model:"CHUWI Intel Celeron Quad Core 12th Gen N100 - (8 GB/256 GB SSD/Windows 11 Home) GemiBook X_Pro Laptop",price:"₹17,990",ac1:"Intel Celeron Quad Core Processor (12th Gen)",ac2:"8 GB LPDDR5 RAM",ac3:"64 bit Windows 11 Home Operating System",ac4:"256 GB SSD",ac5:"35.81 cm (14.1 inch) Display",ac6:"1 Year Onsite Warranty",image2:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/b/r/w/gemibook-x-pro-laptop-chuwi-original-imagwfm84fgdm8bv.jpeg?q=70",emi:"₹510/month",det:"36 months EMI Plan with BOBCARD",img1:"https://m.media-amazon.com/images/I/61NUZK5yUjL._SL1100_.jpg",img2:"https://m.media-amazon.com/images/I/61UYuzRM0IL._SL1100_.jpg",img3:"https://m.media-amazon.com/images/I/61-FPdCqVvL._SL1100_.jpg",img4:"https://m.media-amazon.com/images/I/81jSPR7Ox+L._SL1500_.jpg",img5:"https://m.media-amazon.com/images/I/61kbytfCsDL._SL1100_.jpg",fmodel:"CHUWI Intel Celeron Quad Core 12th Gen N100 - (8 GB/256 GB SSD/Windows 11 Home) GemiBook X_Pro Laptop  (14.1 inch, Grey, 1.46 kg)",sprice:"₹34,990",off:"48% off",desc:"With the 35.81 cm (14.1) UHD display of this laptop, you can immerse yourself in exceptional detailing and clarity. You can get more productive and awaken your creativity with this laptop’s crystal-clear visuals."},
    {model:"Apple MacBook AIR Apple M2 - (8 GB/512 GB SSD/Mac OS Monterey) MLXX3HN/A"
,price:"₹1,02,990",ac1:"Apple M2 Processor",ac2:"8 GB Unified Memory RAM",ac3:"Mac OS Operating System",ac4:"512 GB SSD",ac5:"34.54 cm (13.6 Inch) Display",ac6:"1 Year Limited Warra­nty",image2:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/m/b/n/-original-imagfdf4xnbyyxpa.jpeg?q=70",emi:"₹480/month",det:"36 months EMI Plan with BOBCARD",img1:"https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg",img2:"https://m.media-amazon.com/images/I/61XPhYGQOQL._SL1500_.jpg",img3:"https://m.media-amazon.com/images/I/610TpF8jQyL._SL1500_.jpg",img4:"https://m.media-amazon.com/images/I/81v5JNjZ4-L._SL1500_.jpg",img5:"https://m.media-amazon.com/images/I/61+85vZqI-L._SL1500_.jpg",fmodel:"Apple MacBook AIR Apple M2 - (8 GB/512 GB SSD/Mac OS Monterey) MLY43HN/A  (13.6 Inch, Midnight, 1.24 Kg)",sprice:"1,09,000",off:"6% off",desc:"Charged in a blazing-fast speed with the next-level M2 chip, this redesigned Apple’s notebook comes with mind blowing and has an excellent battery backup that can last up to 18 hours, which comes with an aluminium enclosure."}
    
    
    
     ])
     
    
     const {count,setcount}=useContext(Mycontext)
     const {add,setadd}=useContext(Mycontext)
     
   const cart=(c)=>{
    setcount(count+1)
    setadd([...add,c])

   }

   
 
   
  
  
  
   return(
     <>
      

   
     
    


      
      

     

     <div className="container">
      {
        x.map((a1)=>(
          
          <div className="container1">
             
             <div className="mod" key={a1.model}>
             <img src={a1.image2} className="imag"/>
             <Link to={'/View'}  state={a1} style={{textDecoration: 'none'}}>
             <h2 className="model1">{a1.model}</h2>
             </Link>
             <h4 className="pri">{a1.price}</h4>
             </div>

             
             
              <div className="acess">
              <h4 className="ac1">{a1.ac1}</h4>
              <h4 className="ac2">{a1.ac2}</h4>
              
              <h4 className="ac3">{a1.ac3}</h4>
              <h4 className="ac4">{a1.ac4}</h4>
              <h4 className="ac5">{a1.ac5}</h4>
              <h4 className="ac6">{a1.ac6}</h4>
              
              <button className="cart" onClick={()=>cart(a1)}>Add to cart</button>
              
              

              </div>
             
              
            
             

             
             
          </div>

         

          
         





        ))

        

       

      }

       



     </div>

     
     
     
     
     
     
     
     </>






   )

}


export default Home