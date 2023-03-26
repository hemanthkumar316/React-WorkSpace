import React,{useState,useEffect} from 'react'
import { Navigate } from 'react-router-dom'
const Login = () => {
 const [form,setForm]=useState({username:'',password:''})
 const [error,setError]=useState({})
 const [isSubmit,setIssubmit]=useState(false)
//  const Navigate=useNavigate()
 const changeHandler=(e)=>{
  setForm({...form,[e.target.name]:e.target.value})
 }
 const submitHandler=(e)=>{
  e.preventDefault()
  console.log(form)
  setError(validate(form))
  setIssubmit(true)
 }
 const validate=(values)=>{
  const errors={}
   const upper = /[A-Z]/
  const special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/
 const  number = /[0-9]/
  if(!values.username){
   errors.username='This field is required'
  }
  if(!values.password){
   errors.password='This field is required'
  }
  else if(values.password.length<6){
    errors.password='Password must be 6 numbers'
   }
   else if(values.password.length>8){
    errors.password='Password cannot be more than 8 numbers'
   }
  else if(!values.password.match(upper)){
errors.password='enter any uppercase letters'
  }
  else if(!values.password.match(special)){
    errors.password='enter any special chars'
      }
      else if(!values.password.match(number)){
        errors.password='enter any numeric value'
          }
      if (Object.keys(errors) != 0) {
    return errors
  }
  else {
    return true
  }
 }
 useEffect(() => {
 if(Object.keys(error).length===0 && isSubmit){
  console.log(error)
 }
 }, [])
  return (
    <div className='container mt-5 mx-auto'>
<div className='row'>
<div className='col col-md-5'>
{
  (error===true)?<Navigate to='/dashboard'/>
  :<>
<form onSubmit={submitHandler}>
 <input type='text' placeholder='Enter name' className='form-control' name='username' value={form.username} onChange={changeHandler}/>
 <p className='text-danger'>{error.username}</p>

 <input type='text' placeholder='Enter password' className='form-control' name='password' value={form.password} onChange={changeHandler}/>
 <p className='text-danger'>{error.password}</p>
 
<button className='btn btn-success rounded-pill'>Login</button>
</form>
</>
}

</div>
</div>
    </div>
  )
}

export default Login