import React,{useState,useEffect} from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
const CarouselEX = () => {
const [items,setItems]=useState([])
useEffect(() => {
axios.get('https://panorbit.in/api/users.json')
.then(response=>response.data)  
.then(data=>setItems(data.users))
}, [])
  return (
    <div className='row justify-content-center'>
<div className='col col-md-6'>
<Carousel>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.profilepicture} alt={`Slide ${index}`}/>
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <h3>{item.phone}</h3>

          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
</div>
    </div>
  
  );
}

export default CarouselEX;
