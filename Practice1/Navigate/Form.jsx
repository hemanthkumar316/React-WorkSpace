import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [addData, setAddData] = useState([]);
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(formValues)
    const newData = [...addData, formValues];
    setAddData(newData);
  };
  return (
    <>
      <div className="container mt-5 d-flex justify-content-center ">
        <div className="row">
          <div className="col">
            <form action="" onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control-lg"
                  placeholder="name"
                  name="name"
                  value={formValues.name}
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control-lg"
                  placeholder="email"
                  name="email"
                  value={formValues.email}
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control-lg"
                  placeholder="password"
                  name="password"
                  value={formValues.password}
                  onChange={changeHandler}
                />
              </div>
              <button
                className="btn btn-success"
                onClick={() =>
                  navigate(
                    `/form2/${formValues.name}/${formValues.email}/${formValues.password}`
                  )
                }
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <Table addData={addData}/> */}
    </>
  );
};

export default Form;
