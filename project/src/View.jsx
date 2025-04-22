import { useLocation } from "react-router-dom";
import './View.css'

function View(){
    const location=useLocation()
    const a1=location.state
   return(

       <>
          <div className="container5">
             
             <div className="mod" key={a1.model}>
               <div className="images">
                  <div>
                  <img src={a1.img1} />
                  </div>
                  <div>
                  <img src={a1.img2} />
                  </div>
                   <div>
                   <img src={a1.img3} />
                   </div>
                  <div>
                  <img src={a1.img4} />
                  </div>
                   <div>
                   <img src={a1.img5} />
                   </div>
                  

               </div>
               
               <img src={a1.image2} className="ima"/>
               
             
             <div>
             <h2 className="model2">{a1.fmodel}</h2>
             <h3 className="pric">{a1.emi}</h3>
             <p className="det">{a1.det}</p>
             <div>

             
             <h4 className="sp">Special price</h4>

             <div className="sprice">
               <h3 className="pr1">{a1.price}</h3>
               <h5 className="sp1">{a1.sprice}</h5>
               <h5 className="of1">{a1.off}</h5>

             </div>
             </div>

             <h3 style={{marginLeft:"40px"}}>Available offers:</h3>
                     
 

             <i class="fa fa-tag ssa" aria-hidden="true" ><span style={{marginLeft:"10px",fontSize:"15px",color:"black"}}>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card</span></i>
             <i class="fa fa-tag ssa" aria-hidden="true"><span style={{marginLeft:"10px",fontSize:"15px",color:"black"}}>Bank Offer10% off up to ₹1,000 on all Axis Bank Credit Card (incl. migrated ones) EMI Txns of ₹7,490 and above</span></i>
             <i class="fa fa-tag ssa" aria-hidden="true"><span style={{marginLeft:"10px",fontSize:"15px",color:"black"}}>Bank Offer10% off on BOBCARD EMI Transactions, up to ₹1,500 on orders of ₹5,000 and above</span></i>
             
             <i class="fa fa-tag ssa" aria-hidden="true"><span style={{marginLeft:"10px",fontSize:"15px",color:"black"}}>Bank Offer10% off up to ₹1,000 on DBS Bank Credit Card Transactions, on orders of ₹5,000 and above</span></i>
            

            <h2 style={{marginTop:"120px",marginLeft:"60px",color:"red"}}>Product Description:</h2>
               <p style={{marginLeft:"60px",lineHeight:"25px",textAlign:"justify"}}>{a1.desc}</p>
             </div>
            
            
            
             </div>
             <button className="pay">PAY WITH EMI</button>
             <button className="buy"><i class="fas fa-bolt far" ></i>Buy Now</button>
             

             
             
              
        </div>
 
 
      </>




   )


    
}








export default View