import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
 const [product,setProduct]=useState({})
 const {id}=useParams()
 useEffect(() => {
  axios.get(`https://fakestoreapi.com/products/${id}`)
  .then(response=>response.data)
  // .then(data=>console.log(data))
  .then(data=>setProduct(data))
 }, [])
  return (
    <div className='container mt-5'>
    <pre>{JSON.stringify(product)}</pre>
<div className='row'>
<div className='col col-md-4 p-3'>
<img src={product.image} width='100%' height='80%'/>
<h3>{product.title}</h3>

 <h5>Price: ${product.price}/-</h5>
 <h6>Rating:
{product.rating && product.rating.rate}
</h6>

</div>
<div className='col col-md-6 p-3 mt-5'>
<h3>Categotry :{product.category}</h3>
<h4>{product.description}</h4>
</div>
</div>
    </div>
  )
}

export default Product