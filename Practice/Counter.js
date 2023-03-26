import React,{useState,useEffect} from 'react'

const Counter = () => {
  const [count,setCount]=useState(10)
  
  useEffect(() => {
  let timer=setInterval(()=>{
    if(count>0){
      setCount(count-1)
}
  },1000)
  return()=>{
    clearInterval(timer)
  }
  },[count])
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(10)}>Reset</button>
    </div>
  )
}

export default Counter