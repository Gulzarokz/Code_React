import {useState} from 'react'
import React from 'react'

function Showhide() {
    const [show, setShow] = useState(true);
    
   
  return (
    <div>

        
        
       {
         show?<h1>show</h1>:null 

       } 
         {/* <button onClick={()=>setShow(true)}>show</button> */}
       {/* <button onClick={()=>setShow(false)}>Hide</button> */}
        <button onClick={()=>setShow(!show)}>Toggle</button>
       
    </div>
  )
}

export default Showhide