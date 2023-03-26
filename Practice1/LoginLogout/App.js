import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";


function App() {
  return (
    <>
      <h1 className="text-center mt-5">Login and Logout Application</h1>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/logout" element={<Logout/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;