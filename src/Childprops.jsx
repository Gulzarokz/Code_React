import React from 'react'

function Childprops(props) {
  return (
    <div style={{backgroundColor: 'lightgray', fontSize: '20px', textAlign: 'center'}}>

    <h1>{props.name}</h1>
    <h2>{props.address}</h2>
    <h2>{props.email}</h2>
    <h1>{props.Tahsil.kohat}</h1>
    <h1>{props.Tahsil.kohat}</h1>

        </div>
    
  )
}

export default Childprops