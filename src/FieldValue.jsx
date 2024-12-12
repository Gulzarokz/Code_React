import { useState } from 'react'
import React from 'react'
// import './App.css'

function FieldValue() {
  const [data, setData] = useState(null)
  const [print, setPrint] = useState(false)
  function getData(e) {
    setPrint(false)
   
    setData(e.target.value);
   
    
  }
   return (
    <>
    {
      print? <h1>{data}</h1> :null
     }
     <input type="text" onChange={getData}/>
     <button onClick={()=>setPrint(true)}>print Value</button>
    

     



    </>
  )
}

export default FieldValue 
