import React from "react"
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div>
    
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      
    </Routes>

    </div>
  );
}

export default App;
