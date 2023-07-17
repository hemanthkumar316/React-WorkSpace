import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Form2 = () => {
  const [form2, setForm2] = useState({ role: "", loc: "" });
  const { name, email, password } = useParams();
  const changeHandler = (e) => {
    setForm2({ ...form2, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form2);
  };
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h3>Hii {name}</h3>
      <h5>Email:{email}</h5>
      <h5>Password:{password}</h5>
      <form action="" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="" className="form-label mr-3">
            Role
          </label>
          <input
            type="text"
            className="form-control-lg"
            placeholder="role"
            name="role"
            value={form2.role}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="form=label mr-3">
            Loc
          </label>
          <input
            type="text"
            className="form-control-lg"
            placeholder="Loc"
            name="loc"
            value={form2.loc}
            onChange={changeHandler}
          />
        </div>
        <button className="btn btn-primary" onClick={() => navigate(`/table/${name}/${email}/${password}/${form2.role}/${form2.loc}`)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Form2;
