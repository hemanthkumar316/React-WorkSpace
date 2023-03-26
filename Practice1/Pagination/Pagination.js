import React from 'react'
  
const Pagination = ({fetch,pageHandler}) => {
 let pageNumbers=[]
 for(let i=1;i<Math.ceil(fetch.length/10);i++){
pageNumbers.push(i)
 }
  return (
    <div>
     <center>
      {
       pageNumbers.map(page=><><button onClick={()=>pageHandler(page)}>{page}</button></>) 
      }
     </center>
    </div>
  )
} 

export default Pagination