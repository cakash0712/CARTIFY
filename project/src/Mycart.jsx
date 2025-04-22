import React,{ useContext } from 'react'
import './Cart.css'
import Mycontext from './Mycontext'
import { Link, useNavigate } from 'react-router-dom'


const Mycart=()=>{
    const{count}=useContext(Mycontext)
    
    
    const{add}=useContext(Mycontext)
    return(
        <>
        <div className='sar'>
            <img src="https://i.pinimg.com/736x/c3/d2/18/c3d218cee575a8fa4ca9869ccdadb22e.jpg" className='logo'/>
        <input type="search" className='ser'/>
        <i class="fas fa-search sas"></i>
        </div>
        
        <Link to="/Mystore" state={add}>
        <i class="fas fa-cart-plus car">{count}</i>
        </Link>
        </>
    )
}


export default Mycart