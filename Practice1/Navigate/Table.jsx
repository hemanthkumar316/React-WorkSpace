import React from 'react'
import { useParams } from 'react-router-dom'

const Table = () => {
  const {name,email,password,role,loc}=useParams()
  return (
    <>
<table className='table table-hover'>
  <thead>
    <tr>
    <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Password</th>
      <th>Role</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>1</td>
    <td>{name}</td>
    <td>{email}</td>
    <td>{password}</td>
      <td>{role}</td>
      <td>{loc}</td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default Table