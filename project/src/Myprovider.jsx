import { useState } from "react"
import Mycontext from "./Mycontext"



const Myprovider=({children})=>{
    const [count,setcount]=useState(0)
    const [add,setadd]=useState([])
    

    return(
      <>
        <Mycontext.Provider value={{count,setcount,add,setadd}}>
            {children}

        </Mycontext.Provider >
      
      
      
      </>



    )
}

export default Myprovider