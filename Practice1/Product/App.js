import React from 'react'
import Products from './Products'
import {BrowserRouter as Router,Routes,Route} from'react-router-dom'
import Product from './Product'
const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/product/:id' element={<Product/>}/>

      </Routes>
    </Router>
    </div>
  )
}

export default App