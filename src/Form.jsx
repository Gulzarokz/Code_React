import { useState } from 'react'
import React from 'react'

function Form() {

const [name, setName] = useState();
const [interest, setInterest] = useState();
const [TnC, setTnC] = useState();


    function handledata(e) {
       e.preventDefault();
       setName(e.target.value);
       
    }
  return (
    <div className='bg-black'>
        <h1 className=''>our form</h1>

    <form onSubmit={handledata}>
        <h1>{name}</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" 
        
       onChange={(e)=>setName(e.target.value)} /> <br /> <br className='mt-10' />

            <h2>{interest}</h2>
    <label htmlFor="Item">Brand:</label>
        <select onChange={(e)=>setInterest(e.target.value)}>
            <option>TV</option>
            <option>Laptop</option>
            <option>Soniya</option>
        </select><br /> <br />

        <h4>{TnC}</h4>
        <input type="checkbox" onChange={(e)=>setTnC(e.target.checked)} /><span>Term & condition</span > <br /> <br />

        <button>Submit</button>
    </form>



    </div>
  )
}

export default Form