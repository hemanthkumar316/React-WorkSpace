import React from "react";
import Form from "./Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form2 from "./Form2";
import Table from "./Table";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route
            exact
            path="/form2/:name/:email/:password"
            element={<Form2 />}
          />
          <Route exact path="/table/:name/:email/:password/:role/:loc" element={<Table />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
