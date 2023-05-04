import { Incr,Decr } from "./Counter.action";
let initialState={
 Counter:0
}
let CounterReducer=(state=initialState,action)=>{
switch(action.type){
 case Decr:
  return{Counter:state.Counter-1}
case Incr:
 return{Counter:state.Counter+1}
 default:
  return state
}
}
export{CounterReducer} 