import React,{useState} from 'react'
import Child from './Child'

const Parent = () => {
 const [uiColor,setUiColor]=useState(null)
 const getColor=(color)=>{
  setUiColor(color)
 }
  return (
   <>
<Child getColor={getColor}/><br/>

    <div style={{background:`${uiColor}`,width:'200px',height:'200px',border:'1px solid black'}}>
    </div>
   </>

  )
}

export default Parent
