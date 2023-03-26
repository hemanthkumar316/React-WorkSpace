import React,{useState} from 'react'

const Element = () => {
    const [show ,setShow]=useState(true)
  return (
    <div>
        <button onClick={()=>setShow(!show)}>{show ?"hide the element":"show the element"}</button>
      {show &&<div>button changed</div>}
    </div>
  )
}

export default Element