import React from 'react'
import Login from './Login'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Home'
const App = () => {
  return (
    <div>
    <Router>
     <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/home/:name' element={<Home/>}/>

     </Routes>
    </Router>
    </div>
  )
}

export default App