

import React,{useState} from 'react'
let userinfo=[{"firstname":"nulla"},{"firstname":"ut"},{"firstname":"vel"},{"firstname":"aut"},{"firstname":"fugiat"},{"firstname":"corporis"},{"firstname":"quos"},{"firstname":"voluptatem"},{"firstname":"asperiores"},{"firstname":"vero"}]
const Delete = () => {
  const [data,setData]=useState(userinfo)
  const deletehandler=(e)=>{
    let users=e.target.getAttribute('removeitems')
    setData(data.filter(user=>user.firstname!==users))
  }
  return (
    <div>
      {
data.map(user=>{
  return(
    <div>
      <p>{user.firstname}</p>
      <button removeitems={user.firstname} onClick={deletehandler}>delete</button>
    </div>
  )
})
      }
    </div>
  )
}

export default Delete