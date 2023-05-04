import React,{useState,useEffect} from 'react'

const Counter = () => {
 const [count,setCount]=useState(0)
 let timer;
 let handlestart=()=>{
  setCount(count+1)
 } 
 let handlestop=()=>{
  clearTimeout(timer)
 }
 let handlereset=()=>{
  setCount(0)
  clearTimeout(timer)
 }

useEffect(()=>{ 
 if(count){
   timer=setTimeout(handlestart,1000)
  
 }
},[count])
  return (
    <div>
    <h2>{count}</h2>
     <button onClick={handlestart}>start</button>{' '}
     <button onClick={handlestop}>Stop</button>{' '}
     <button onClick={handlereset}>Reset</button>{' '}
    </div>
  )
}

export default Counter