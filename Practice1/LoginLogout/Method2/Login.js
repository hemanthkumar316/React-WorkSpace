import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate=useNavigate()
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitData = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormError(validate(formData));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formError);
    }
  }, []);
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "* This field is required";
    }
    if (!values.password) {
      errors.password = " * This field is required";
    }
    if (Object.keys(errors) != 0) {
      return errors;
    } else {
      return true;
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h1 className="mb-4">Login and Logout Application</h1>
          {formError === true ? (
            navigate(`/home/${formData.name}`) 
          ) : (
            <>
              <form onSubmit={submitData}>
                <div className="form-group">
                  <label className="form-label mr-4">Name</label>
                  <input
                    type="text"
                    className="form-control-lg"
                    placeholder="Enter Name"
                    name="name"
                    value={formData.name}
                    onChange={changeHandler}
                  />
                </div>
                <p className="text-danger">{formError.name}</p>
                <div className="form-group">
                  <label className="form-label mr-1">password</label>
                  <input
                    type="text"
                    className="form-control-lg"
                    placeholder="Enter password"
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
                  />
                </div>
                <p className="text-danger">{formError.password}</p>
                <button className="btn btn-primary btn-lg">Login</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
