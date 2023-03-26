import React,{useState,useEffect} from 'react'

const Cricketers = () => {
  const [form,setForm]=useState({cname:'',country:'',matches:''})
  const [formerrors,setFormerrors]=useState({})
  const [issubmit,setIssubmit]=useState(false)
  const [add,setAdd]=useState([])
  const [search,SetSearch]=useState('')
  const changehandler=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const submithandler=(e)=>{
    e.preventDefault()
    console.log(form)
    const newadd=[...add,form]
    setAdd(newadd)
    setFormerrors(Validate(form))
    setIssubmit(true)
  }
  useEffect(()=>{
   if(Object.keys(formerrors).length===0 & issubmit){
    console.log(formerrors)
   }
  },[])
  const Validate=(values)=>{
    const errors={}
    if(!values.cname){
      errors.cname='This is field is required'
    }
    if(!values.country){
      errors.country='This is field is required'
    }
    if(!values.matches){
      errors.matches='This is field is required'
    }
    if(!values.role){
      errors.role='This is field is required'
    }
    return errors
  }
  const deletehandler=(indexvalue)=>{
  const filetered=add.filter((elem,index)=>indexvalue!==index)
  setAdd(filetered)
  }
  const edithandler=(editindexvalue)=>{
    const filetered= add.filter((elem,index)=>index!==editindexvalue)
    setAdd(filetered)
    const editselector=add.find((elem,index)=>index===editindexvalue)
    setForm({
      cname:editselector.cname,
      country:editselector.country,
      matches:editselector.matches,
      role:editselector.role
    })
  }
  return (
    <div className='container mt-5'>
   <div className='row'>
  <div className='col'>

  <div className='card mb-5'>
   <div className='card-header bg-info'>
  <h1 className='text-center text-white'>CRICKET ACADEMY</h1>
   </div>
   <div className='card-body'>
   <form onSubmit={submithandler}>
   <div className='d-md-flex'>
   <input type='text' name='cname' value={form.cname} onChange={changehandler} placeholder='Enter cricketer name' className='form-control'/>
   <p className='text-danger'>{formerrors.cname}</p>
    <input type='text' name='country' value={form.country} onChange={changehandler} placeholder='Enter cricketer country' className='form-control'/>
    <p className='text-danger'>{formerrors.country}</p>
    <input type='number' name='matches' value={form.matches} onChange={changehandler} placeholder='Enter Number of matches Played' className='form-control'/>
    <p className='text-danger'>{formerrors.country}</p>
    <select name='role' value={form.role} onChange={changehandler}>
      <option>Choose Role</option>
      <option>Batsman</option>
      <option>Bowler</option>
      <option>All Rounder</option>
      <option> Wicket Keeper</option>
    </select>
    <p className='text-danger'>{formerrors.role}</p>
    <button className='btn btn-primary'>Add</button>
 
   </div>
   </form>
    </div>
  </div>
     

  <div className=' mb-3 d-md-flex align-items-center justify-content-center'>
      <button className='btn btn-outline-info mr-3' value='Batsman' onClick={(e)=>SetSearch(e.target.value)}>Batsman</button>
      <button className='btn btn-outline-info mr-3' value='Bowler' onClick={(e)=>SetSearch(e.target.value)}>Bowler</button>
      <button className='btn btn-outline-info mr-3' value='All Rounder' onClick={(e)=>SetSearch(e.target.value)}>All Rounder</button>
      <button className='btn btn-outline-info mr-3' value='Wicket keeper' onClick={(e)=>SetSearch(e.target.value)}>Wicket Keeper</button>
      <button className='btn btn-outline-warning mr-3'  onClick={(e)=>SetSearch(e.target.value)}>All Players</button>
     </div>
      {Object.keys(add).length>0 ?(
        <table className='table table-hover'>
      <thead>
        <tr>
          <th>S.NO</th>
          <th>Cricker Name</th>
          <th>Country Name</th>
          <th>Played Matches</th>
          <th>Role of Cricker</th>
          <th>EDIT/DELETE</th>
        </tr>
      </thead>
      <tbody>
        {
 add.filter((val)=>{
  if(search===''){
    return val
  }
  else if (val.role.toLowerCase().includes(search.toLowerCase())){
                return val
              }
 })
 .map((person,index)=>{
  return(
    <tr>
      <td>{index+1}</td>
      <td>{person.cname}</td>
      <td>{person.country}</td>
      <td>{person.matches}</td>
      <td>{person.role}</td>
      <td>
      <i class="fa-solid fa-pen-to-square mr-4" onClick={()=>edithandler(index)}></i>
      <i class="fa-solid fa-trash" onClick={()=>deletehandler(index)}></i>
      </td>
    </tr>
  )
 })
        }
      </tbody>
    </table>
      ):null}
   

  </div>
   </div>
    </div>
  )
}

export default Cricketers