import React from 'react'

const Application = () => {
  return (
    <>
    <h1>job application form</h1>
    <h2>section 1</h2>
    <p>all fields are mandatory</p>
    <span title='close'>x</span>
    <img src='' alt='a default image'/>
     <form>
     <h1>Loginform</h1>
      <div>
       <label  htmlFor="name">Name</label>
       <input type='text' id='name' required data-testid='required-id'placeholder='Fullname'value='hemanth' onChange={()=>{}}/>
      </div>
      <div>
        <label htmlFor='bio'>Bio</label>
        <textarea id='bio' name='bio'/>
      </div>
      <div>
       <label htmlFor="job-location">job location</label>
       <select data-testid='select'>
        <option>select country</option>
        <option value='AP'>AP</option>
        <option value='KA'>KA</option>
        <option value='TN'>TN</option>  
        <option value='KE'>KE</option>
        <option value='TE'>TE</option>
       </select>
      </div>
      <div>
       <input type='checkbox'  data-testid="input-checkbox-checked" checked/>I Agree Terms and conditions
       
      </div>
      <button>submit</button>
     </form>
    </>
  )
}

export default Application