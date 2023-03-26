import React,{useState} from 'react'

const Count = () => {
 const [counting,setCounting]=useState(0)
  return (
    <div>
    hemanth
    <h1 data-testid='countervalue'> count value:{counting}</h1>
     <button data-testid='button-up' onClick={()=>setCounting(counting+1)}>+</button>
     <button  disabled data-testid='button-down'onClick={()=>setCounting(counting-1)}>-</button>
    </div>
  )
}

export default Count