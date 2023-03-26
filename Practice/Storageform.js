import React,{useState,useEffect} from 'react'

const Storageform = () => {
    const [form,setForm]=useState({email:"",password:'',phone:""})
    const changehandler=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const submithandler=(e)=>{
        e.preventDefault()
        console.log(form)
    }
 const id=new Date().getTime().toString()
 localStorage.setItem(id,JSON.stringify(form))
  return (
    <div className='container mt-5'>
    <form onSubmit={submithandler}>
 <div className='form-group'>
    <input type='text' className='form-control' name='email' value={form.email} onChange={changehandler}/>
 </div>
 <div className='form-group'>
    <input type='text' className='form-control'name='password' value={form.password} onChange={changehandler}/>
 </div>
 <div className='form-group'>
    <input type='text' className='form-control' name='phone' value={form.phone} onChange={changehandler}/>
 </div>
 <button>submit</button>
 </form>
    </div>
  )
}

export default Storageform