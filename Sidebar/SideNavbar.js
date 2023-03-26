import React from 'react'
import './SideNavabar.css'
import { Link } from 'react-router-dom'
const SideNavbar = () => {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="login">login</Link>
            </li>
            <hr/>
            <li className="nav-item">
              <Link className="nav-link" to="dashboard">Dashboard</Link>
            </li>
            <hr/>
            <li className="nav-item">
              <Link className="nav-link" to="signup">Signup</Link>
            </li>
            <hr/>
          </ul>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default SideNavbar