import React from 'react'
import { useFormik } from 'formik'
const FormikForm = () => {
 const formik = useFormik({
  initialValues: {
   email: '',
   password: ''
  },
  onSubmit:(values)=>{
   console.log('form submit values',values)
  },
  validate:(values)=>{
   let errors={}
   if(!values.email){
    errors.email='*Email is required'
   }
   if(!values.password){
    errors.password='*Password is required'
   }
   return errors
  }
 })
 // console.log('form values',formik.values)
 return (
  <>
   <div className="container-fluid my-4 d-flex justify-content-center">
    <div className="row  ">
     <div className="col">
      <div className="border  border-primary border-3 p-5">
  <h2 className='bg-success text-white text-center mb-3 p-1'>Login form</h2>

       <form  onSubmit={formik.handleSubmit} >
        <div className="form-group" >
         <input type="text" className='form-control-lg' placeholder='Enter Email...' name='email' value={formik.values.email} onChange={formik.handleChange} />
        </div>
        {formik.errors.email?<><span className='text-danger'>{formik.errors.email}</span></>:null}
        <div className="form-group">
         <input type="text" className='form-control-lg' placeholder='Enter Password...' name='password' value={formik.values.password} onChange={formik.handleChange} />
        </div>
        {formik.errors.password?<><span className='text-danger'>{formik.errors.password}</span></>:null}

        <div className="text-center mt-5">
         <button className='btn btn-success btn-lg btn-inline-block'>Submit</button>

        </div>
       </form>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}

export default FormikForm