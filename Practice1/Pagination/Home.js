import React,{useState,useEffect} from 'react'
import axios from'axios'
import Pagination from './Pagination'
const Home = () => {
  const [fetch,setFetch]=useState([])
  const [perpage,setPerpage]=useState([])
  useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res=>{
    setFetch(res.data)
    setPerpage(res.data.slice(0,20))
  })
  }, [])
  const pageHandler=(pageNumber)=>{
    setPerpage(fetch.slice((pageNumber*10)-10 ,pageNumber*10))
    
  }
  return (
    <div>
<pre>{JSON.stringify(perpage)}</pre>
{
  fetch.length>=1?
  <div>
    {
      perpage.map((post)=><div>{post.title}</div>)
    }<br/>
    <Pagination fetch={fetch} pageHandler={pageHandler}/>
  </div>
  :<>Page not loaded</>
}
    </div>
  )
}

export default Home