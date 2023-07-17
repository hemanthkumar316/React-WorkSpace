import axios from 'axios'
import React, { useState,useEffect } from 'react'

const Accordian = () => {
 const [goods,setGoods]=useState([])
 const invertoryGoods=[]
 useEffect(()=>{
getApi()
 },[])
 const getApi=async()=>{
const response=await axios.get('http://test.api.boxigo.in/sample-data/')
invertoryGoods=response.data.Customer_Estimate_Flow.map((ele)=>setGoods(ele.items.inventory))
 }
  return (
    <div>
   
    <div className="accordion " id="accordionFlushExample">
    {
      goods.map((items,index)=>{
  return(
    <div className="accordion-item" key={index}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false"  aria-controls={`collapse${index}`}>
      <h5>{items.displayName}</h5>
      </button>
    </h2>
    <div id={`collapse${index}`}className="accordion-collapse collapse" data-bs-parent="#accordionExample"    aria-labelledby={`heading${index}`}>
      <div className="accordion-body">
        {
          items.category.map((ele)=><h6>{ele.displayName}</h6>)
        }
      </div>
    </div>
  </div>
  )
})
      }
    </div>

    </div>
  )
}

export default Accordian