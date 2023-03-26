import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='text-center mt-5'>
     <h1>Welcome to Dashboard</h1>
     <Link to='/Login'>
     <button className=' btn btn-danger rounded-pill'>SignOut</button>

     </Link>
    </div>
  )
}

export default Dashboard