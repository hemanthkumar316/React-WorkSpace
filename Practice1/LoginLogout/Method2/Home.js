import React from "react";
import { useNavigate,useParams } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
const {name}=useParams()
console.log(name
  )
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
        <h1 className="display-1">Hii {name}</h1>

          <h1 className="display-3  text-center">Welcome to Home Page</h1><br/>
          <h3>If you want to Logout ?</h3><br/>
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
