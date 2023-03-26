import React,{useState} from 'react'
const data = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocks: 8,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocks: 6,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocks: 0,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocks: 5,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocks: 0,
    name: 'iPhone 5',
  },
  { category: 'Electronics',
   price: '$199.99',
    stocks: 4,
   name: 'Nexus 7' },
];
const Goods = () => {
  const [search,setSearch]=useState('')
  const [items,setItems]=useState(data)
  const [stocks,setStocks]=useState()
  const searchHandler=(e)=>{
const {value}=e.target
setSearch(value)
let itemdata=[...data]
itemdata=itemdata.filter(item=>item.category.toLowerCase().includes(value.toLowerCase()))
setItems(itemdata)
  }
  const checkHandler=(e)=>{
    const {checked}=e.target
    setStocks(checked)
    let itemdata=JSON.parse(JSON.stringify(data))
    if(checked){
      itemdata=itemdata.filter(i=>i.stocks!==0)
    }
     return setItems(itemdata)
  }
  return (
    <>  
<div className='container mt-5'>
<div className='row'>
<div className='col'>
<form>
  <input type='search' className='form-control-lg' placeholder='search...' value={search} onChange={searchHandler}/><br/>
  <input type='checkbox' checked={stocks} onChange={checkHandler} />Show stock items only
</form>
<table>
  <thead>
    <tr>
      <th>Category</th>
      <th>Name</th>
      <th>Price</th>
      <th>Stocks</th>
    </tr>
  </thead>
  <tbody>
    {
      items.map((item,index)=>{
        return(
          <tr key={index}>
            <td>{item.category}</td>
            <td style={{color:item.stocks===0?'red':'black'}}>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.stocks}</td>
          </tr>
        )
      })
    }
  </tbody>
</table>
</div>
</div>
</div>
    </>
  )
}

export default Goods