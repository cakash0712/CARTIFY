import { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"
import Mycontext from "./Mycontext"
import { Link } from "react-router-dom"








function Mystore(){
  const location=useLocation()
  const intialitems=location.state || []
  const a1=location.state
 
  const{add,setadd}=useContext(Mycontext)
  const{count,setcount}=useContext(Mycontext)

  useEffect(()=>{
    if(location.state?.cartitems && add.length===0){
      setadd(location.state.cartitems)
    }else if(add.length>0){
      console.log("cart already")
    }

  },[location.state?.cartitems,setadd,add])
    
  //Remove function
   const removed=(itemremove)=>{
    const updatecart=add.filter((cartitems)=> cartitems.model !== itemremove.model)
    setadd(updatecart)
    setcount(count-1)

   }

   return(
    <>
     <h1 style={{marginLeft:"60px"}}>Shopping Cart</h1>
     <hr />

    {
    add.length > 0 ?(
      add.map((item)=>(
        <div className="container2">
             
            <div className="mod" key={item.model}>
            <img src={item.image2} className="imag"/>
            <Link to={"/View"}  state={item} style={{textDecoration:"none"}}>
            <h2 className="model1">{item.model}</h2>
            </Link>
            </div>

            
            
             <div className="acess">
              <p style={{marginLeft:"560px",color:"aqua"}}>In stock</p>
              <h4 style={{marginLeft:"560px",color:"gray"}}>Eligible for FREE Shipping</h4>
             <h5 className="ac1">{item.ac1}</h5>
             <h5 className="ac2">{item.ac2}</h5>
             
             <h5 className="ac3">{item.ac3}</h5>
         
            
             
             <div className="sprice" style={{marginLeft:"550px"}}>
              <h4 style={{textDecoration:"line-through",color:"grey"}}>{item.sprice}</h4>
              <h2 style={{marginLeft:"10px"}}>{item.price}</h2>
              <h4 style={{marginLeft:"10px",color:"green"}}>{item.off}</h4>


             </div>

             
 

             <button style={{color:"white",backgroundColor:"red",borderRadius:"50px",height:"30px",width:"90px",marginLeft:"620px",cursor:"pointer"}} onClick={()=>removed(item)}><i class="fas fa-trash rem" style={{color:"blue",marginRight:"4px"}}></i>Remove</button>
             
              <hr />

              </div>
             
              
            
             

             
             
          </div>

      ))

    ):(
      <p style={{textAlign:"center",fontSize:"30px"}}>Your Cart is Empty</p>
    )




    }
    
    
    
    
    
    
    
    
    </>






   )
   
    
  }

export default Mystore