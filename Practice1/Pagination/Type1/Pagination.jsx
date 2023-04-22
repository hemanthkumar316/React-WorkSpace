import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Pagination = () => {
  const [products, setProducts] = useState([])
  const [page,setPage]=useState(1)
  useEffect(() => {
    getProducts()
  }, [])
  const getProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products?limit=100')
    const data =  await response.data
    console.log(data)
    if (data && data.products) {
      // console.log(data.products.length)
      setProducts(data.products)
    }
  }
  const selectHandler=(selectedPage)=>{
    if(selectedPage>=1 && selectedPage<=products.length/10 && selectedPage!==page){
setPage(selectedPage)
// console.log(selectedPage)
    }
  }
  return (
    <div className='mt-5 mb-3'>
    {
      products.length>0 && <div className='buttons text-center'>
    <i className={page>1?'fa-solid fa-backward mr-3 fa-2x':'btn-disabled'} onClick={()=>selectHandler(page-1)}></i>
    {
      [...Array(products.length/10)].map((elem,index)=>{
        return <button className={ page===index+1?'btn btn-danger mr-3':'btn btn-info mr-3' } key={index} onClick={()=>selectHandler(index+1)}>{index+1}</button>
      })
    }
    <i className={page<products.length/10?'fa-solid fa-forward fa-2x ml-3':'opacity-0'} onClick={()=>selectHandler(page+1)}></i>

    </div>
    }
    
      {/* <pre>{JSON.stringify(products)}</pre> */}
      <div className="container-fluid mt-5 ">
        <div className="row justify-content-center">
          <div className="col col-md-12">
            {
              products.length > 0 && <div className='row justify-content-center'>
                {
                  products.slice(page*10-10,page*10).map((product) => {
                    return (
                      <div className='col col-md-3' key={product.id}>
                        <div className="card mb-3">
                          <div className="card-header">
                            <img src={product.thumbnail} className='card-img' alt={product.title} />
                            <h5 className='card-title text-center'>{product.title}</h5>
                          </div>
                        </div>
                      </div>
                    )
                  })

                }
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagination