import React,{useRef,useEffect} from 'react'

const Ref = () => {
  const inputref=useRef(null)
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(inputref.current.value)
  }
  useEffect(() => {
  inputref.current.focus()
  }, [])
  return (
    <div className='text-center'>
    
     <input type='text' placeholder='enter name' ref={inputref}/><br/><br/>
     <button onClick={submitHandler}>submit</button>
    </div>
  )
}

export default Ref