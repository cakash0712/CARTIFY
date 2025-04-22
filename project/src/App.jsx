import {Route,Routes} from 'react-router-dom';
import View from './View';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Mycart from './Mycart';
import Myprovider from './Myprovider';
import { useState } from 'react';
import Mystore from './Mystore';









function App() {
     const[x,sex]=useState('')
  

  return (
    <>
    
    
   



     
      <Myprovider>

      <Mycart/>
      <Navbar></Navbar>
       <div className='app'>
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/View' element={<View/>}/>
      <Route path='/Mystore' element={<Mystore/>}/>
      
     
      
    </Routes>
    </div>
    </Myprovider>
      
    </>
  )
}

export default App
