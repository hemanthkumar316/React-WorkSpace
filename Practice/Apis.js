import React,{useState,useEffect} from 'react'
import axios from'axios'
const Apis = () => {
 const [api,setApi]=useState()
 const [items,setItems]=useState([])
 useEffect(() => {
/*  fetch(`https://jsonplaceholder.typicode.com/${api}`)
 .then(response=>response.json())
 .then(json=>setItems(json)) */
 axios.get(`https://jsonplaceholder.typicode.com/${api}`)
 .then(response=>response.data)
 .then(data=>setItems(data))
 }, [api])
  return (
    <div className='mt-5 ml-5'> 
    <>
     <button onClick={()=>setApi('posts')}>Posts</button>{' '}
     <button onClick={()=>setApi('users')}>users</button>{' '}
     <button onClick={()=>setApi('comments')}>comments</button>{' '}
     <button onClick={()=>setApi('todos')}>todos</button>{' '}
     <button onClick={()=>setApi('photos')}>photos</button>{' '}
     <button onClick={()=>setApi('albums')}>albums</button>{' '}
     </>
     <h1>{api}</h1>
     {
      items.map(item=>{
       return(
        <div key={item.id}>
        <pre>{JSON.stringify(item)}</pre>
        </div>
     
       )
      })
     }
    </div>
  )
}

export default Apis