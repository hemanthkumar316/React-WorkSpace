import React,{useState} from 'react'

const ToDoTask = () => {
 const [todo,setTodo]=useState('')
 const [todos,setTodos]=useState([{id:1,text:'hemanth',completed:false},{id:2,text:'jeevan',completed:false},{id:3,text:'mamma',completed:false}])
const submitTodo=(e)=>{
 e.preventDefault()
 console.log(todo)
 const newId=todos.length>0?todos[todos.length-1].id+1:1
 const newIdItem={id:newId,text:todo,completed:false}
 setTodos([...todos,newIdItem])
 setTodo('')
}
const deleteTodo=(id)=>{
const delteItemTodo=todos.filter((todo)=>todo.id!==id)
setTodos(delteItemTodo)
}
const changeCheckBox=(id)=>{
 const updateTodo=todos.map((todo)=>{
  if(todo.id===id){
   return{...todo,completed:!todo.completed};
  }
  else{
   return todo
  }
 })
 setTodos(updateTodo)
}
const calculateChecked = () => todos.filter((el) => el.completed).length;
  return (
    <>
     <div className="container">
      <div className="row">
      <div className="col">
      <div>
       {
        todos.map((todo)=>{
         return(
          <div key={todo.id}>
           <input type='checkbox' onChange={()=>changeCheckBox(todo.id)}/>
           <span style={{textDecoration:todo.completed ?'line-through':'null'}}>{todo.text}</span>
           <i className='fa fa-trash fa-1x ' onClick={()=>deleteTodo(todo.id)}></i>
          </div>
         )
        })
       }
      </div>
       <div className="form-group">
        <input type='text' className='form-control-lg'placeholder='enter todo'value={todo} onChange={(e)=>setTodo(e.target.value)}/>
       </div>
       <button className='btn btn-primary' onClick={submitTodo}>Get</button>
       <h1>Done:{calculateChecked()}</h1>
     
      </div>
      </div>
     </div>
    </>
  )
}

export default ToDoTask