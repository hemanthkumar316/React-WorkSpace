import React,{useState} from 'react'
import axios from'axios'
const Temperature = () => {
 const [search,setSearch]=useState('')
 const [result,setResult]=useState()
 const searchHandler=(e)=>{
  e.preventDefault()
  console.log(search)
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d885aa1d783fd13a55050afeef620fcb`)
  .then(response=>response.data)
  .then(data=>setResult('Temperature at'+'\n'+data.name+' is \n'+Math.round(data.main.temp-273.5)+"°C and wind speed is "+data.wind.speed))
 }
  return (
    <div>
    <pre>{JSON.stringify(result)}</pre>
     <form onSubmit={searchHandler} className='text-center'>
      <input type='search' value={search} onChange={(e)=>setSearch(e.target.value)}className='form-control-lg'/>
      <button className='btn btn-warning ml-4'>search</button>
      <h1 className='text-center'>{result}</h1>
     </form>
    </div>
  )
}
export default Temperature