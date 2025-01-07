import React from 'react'

export const Clickevent = () => {
 function click(){
    alert("Clicked")
 }

  return (
    <div>
        {/* <button onClick={click}>Click-Me</button> */}
        {/* <button onClick={click()}>Click-Me</button> it call automatically when reload the pages. it should stop by removing the () */}

        {/* <button onClick={()=>alert('clicked')}>Click-Me</button> */} can st0p too by arrow funtion

    </div>
  )
}
