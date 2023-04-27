import React from 'react'
import Login from './Login'
import {BrowserRouter as Router,Route,Routes} from'react-router-dom'
import Home from './Home'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App