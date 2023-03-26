import React,{useState,useEffect} from 'react'
import axios from'axios'
const Intergation = () => {
 const [data,setData]=useState([])
 useEffect(() => {
  getData()
 }, [])
 const getData=async()=>{
const response=await axios.get('https://reqres.in/api/users?page=1')
setData(response.data.data)
 }
 const deleteHandler=(id)=>{
  const newdata=data.filter(user=>user.id!==id)
  setData(newdata)
 }
  return (
    <div>
    <pre>{JSON.stringify(data)}</pre>
    <table className='table table-hover'>
<thead>
 <tr>
  <th>ID</th>
  <th>Avatar</th>
  <th>Firstname</th>
  <th>Lastname</th>
  <th>Email</th>
  <th>Status</th>
 </tr>
</thead>
<tbody>
 {
  data?.map((user)=>{
   return(
    <tr>
     <td>{user.id}</td>
     <td>
      <img src={user.avatar}/>
     </td>
     <td>{user.first_name}</td>
     <td>{user.last_name}</td>
<td>{user.email}</td>
<td><i className='fa fa-trash text-danger fa-2x' onClick={()=>deleteHandler(user.id)}></i></td>
    </tr>
   )
  })
 }
</tbody>
    </table>
    </div>
  )
}

export default Intergation