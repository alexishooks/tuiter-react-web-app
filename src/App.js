import Labs from "../src/labs/index.js";
import React from "react";
import HelloWorld from "./labs/a6/hello-world";
import {BrowserRouter} from "react-router-dom"
import {Route, Routes} from "react-router";
import Tuiter from "./tuiter";

function App() {
  return (

<BrowserRouter>
  <div className="container">
    <Routes>
      <Route
          path="/*"
          element={<Labs/>}/>

      <Route
          path='/hello'
          element={<HelloWorld/>}/>

      <Route
          path='/tuiter'
          element={<Tuiter/>}/>
    </Routes>
      </div>
</BrowserRouter>
  );
}

export default App;