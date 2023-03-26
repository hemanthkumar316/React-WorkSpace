import React,{useState,useEffect} from 'react'
import { Navigate} from "react-router-dom";
const Login = () => {
const [formvalues,setFormvalues]=useState({email:'',password:''})
 const [formerrors,setFormerrors]=useState({})
 const [isSubmit,setIsSubmit]=useState(false)
const changeHandler=(e)=>{
  setFormvalues({...formvalues,[e.target.name]:e.target.value})
}
 const validate=(values)=>{
  const errors={}
  if(!values.email){
    errors.email='This field is required'
  }
  if(!values.password){
    errors.password='This field is required'
  }
  if(Object.keys(errors)!=0){
    return errors
  }
  else{
    return true
  }
 }
 const loginHandler=(e)=>{
  e.preventDefault()
  setFormerrors(validate(formvalues))
  setIsSubmit(true)
  console.log(formvalues)
 }
 useEffect(() => {
 if(Object.keys(formerrors).length===0 && isSubmit){
  console.log(formerrors)
 }
 }, [])
  return (
    <div className='container-fluid  mt-5 text-center border p-5 col col-md-6'>
     <h1 className='text-warning'>Login Component Data</h1><br/>
     {(formerrors===true)?<Navigate to='/logout'/>:<>
     <form onSubmit={loginHandler}>
     <label className='h3'>Email</label>{' '}
     <input type='text'value={formvalues.email} name='email'onChange={changeHandler} className='form-control-lg bg-info'/><br/><br/>
     <p className='text-danger'>{formerrors.email}</p>
     <label className='h3'>Password</label>{' '}
     <input type='text' value={formvalues.password} name='password' onChange={changeHandler} className='form-control-lg bg-info'/><br/><br/>
     <p className='text-danger'>{formerrors.password}</p>
     <button className='btn btn-primary btn-lg rounded-pill'>Login</button>
     </form>
     </>}
   
  
    </div>
  )
}

export default Login