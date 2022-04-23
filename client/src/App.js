import React from "react"
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";


function App() {
  return (
    <div>
    
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
