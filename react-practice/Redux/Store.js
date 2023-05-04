import {createStore} from'redux'
import { CounterReducer } from './Counter.reducer'
import{composeWithDevTools} from'redux-devtools-extension'
let Store=createStore(CounterReducer,composeWithDevTools())
export{Store}