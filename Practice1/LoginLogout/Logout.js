import React from 'react'
import { Link } from 'react-router-dom'
const Logout = () => {
  return (
    <div className='container-fulid'>
      <div className='card text-center'>
<div className='card-body'>
<h1>Welcome to Dashboard </h1>
<Link to='/'><button className='btn btn-warning'>Signout</button></Link>
</div>

      </div>
    </div>
  )
}

export default Logout