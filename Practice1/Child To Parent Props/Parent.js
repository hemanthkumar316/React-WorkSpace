import React,{useState} from 'react'
import Child from './Child'

const Parent = () => {
 const [count,setCount]=useState(0)
 //using callback function which get data form child component
 const increment=()=>{
  setCount(count+1)
 }
  return (
    <div>
    <h1>{count}</h1>
<Child increment={increment}/>
    </div>
  )
}

export default Parent