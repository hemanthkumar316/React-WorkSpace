import React from 'react'
import {BrowserRouter as Router,Route,Routes} from'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import SideNavbar from './SideNavbar'
import Signupform from './Signupform'
const App = () => {
  return (
    <div>
      <Router>
      <SideNavbar/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/signup' element={<Signupform/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App