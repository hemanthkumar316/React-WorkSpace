import React,{useState,useEffect} from 'react'
import axios from'axios'
import { Link } from 'react-router-dom'
const Products = () => {
 const [products,setProducts]=useState([])
 useEffect(() => {
 axios.get('https://fakestoreapi.com/products')
 .then(response=>response.data)
 // .then(data=>console.log(data))
 .then(data=>setProducts(data))
 }, [])
  return (
    <div className='container my-5 '>
    <div className='row justify-content-center'>
    <pre>{JSON.stringify(products)}</pre>
<div className='col col-md-12 mb-5'>
<div className='row justify-content-center'>
{
products.map((product)=>{
 return(
  <div className='col-md-3 mb-4'>
  <div className='card text-center'>
  <div className='card-header'>
  <Link to={`/product/${product.id}`}>
  <img src={product.image} width='100%' height='100%'/>

  </Link>
</div>
<div className='card-body'>
<h5>{product.title.substring(0,12)}</h5>
<p>RS {product.price}/-</p>
<button className='btn btn-info text-white'>BUY NOW</button>
</div>
  </div>
  </div>

 )
})

}
</div>

</div>
    </div>
    </div>
  )
}

export default Products