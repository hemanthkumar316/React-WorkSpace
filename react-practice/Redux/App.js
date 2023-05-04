import React from 'react'
import Counter from './Counter'
import { Provider } from 'react-redux'
import{Store} from'./Store'
const App = () => {
  return (
    <div>
      <Provider Store={Store}>
      <Counter/>
      </Provider>
    </div>
  )
}

export default App