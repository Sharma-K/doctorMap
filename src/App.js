import React, {useState,useEffect, useContext} from "react";
import axios from "axios";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false); 

  
  
  return (
    <div className="App">

  <Routes>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/" element={<Login check={isLoggedIn}/>} />
    <Route path="/register" element={<Register />}/>

 </Routes>
    </div>
  );
}

export default App;
