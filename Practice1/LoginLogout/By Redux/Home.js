import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Home = () => {

  const name = useSelector((state) => state.userName);
  console.log(name)
  const navigate = useNavigate();


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h1>Welcome to Home Page</h1>
          <h4>Hii {name}</h4>
          <h5>If you want to Logout ?</h5>
          <button
            className="btn btn-warning btn-lg"
            onClick={() => navigate("/")}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
