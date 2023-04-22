import React from 'react'
  
const Pagination = ({fetch,pageHandler}) => {
 let pageNumbers=[]
 for(let i=1;i<Math.ceil(fetch.length/9);i++){
pageNumbers.push(i)
 }
  return (
    <div>
     <center>
      {
pageNumbers.length>10?<>
  {
    pageNumbers.map((elem,index)=>{
        return(
          <>
          <button onClick={()=>pageHandler(index+1)} className='btn btn-info mr-3'>{index+1}</button>
          </>
        )})
  }
</>:<>No Data Found</>
       
        
      }
     </center>
    </div>
  )
} 

export default Pagination