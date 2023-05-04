import React from 'react'
import { incraction,decraction } from './Counter.action'
import { useDispatch,useSelector } from 'react-redux'
const Counter = () => {
 let Counter=useSelector((state)=>{
      return state.Counter
  })
  let dispatch=useDispatch()
 let decrhandler=()=>{
   dispatch(decraction())
 }
 let incrhandler=()=>{
   dispatch(incraction())
 }
  return ( 
    <>
<div className="container mt-5">
 <div className="row">
  <div className="col">
  <h1>Counter value:{Counter}</h1>
   <button className='btn btn-danger mr-3' onClick={decrhandler}>Decr</button>
   <button className='btn btn-success' onClick={incrhandler}>Incr</button>
  </div>
 </div>
</div>
    </>
  )
}

export default Counter