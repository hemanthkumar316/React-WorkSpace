import React,{useState} from 'react'
//callback function
const Child = ({getColor}) => {
 const [activeColor,setActiveColor]=useState('')
 const handleChange=(e)=>{
  const{value}=e.target
  setActiveColor(value)
  getColor(value)
 }
  return (
    <div>
     <input type='text' value={activeColor} onChange={handleChange}/>
    </div>
  )
}

export default Child