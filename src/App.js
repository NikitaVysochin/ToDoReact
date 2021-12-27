import logo from "./logo.svg";
import "./App.scss";
import React, { State, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import axios from "axios";
import Header from "./Header/Header";
import MainInput from "./MainInput/MainInput";
import Tasks from "./Tasks/Tasks";
import Routing from "./RoutingRedact/Routing";

const App = () => {
  const [arr, setArr] = useState([]);
  const [elem, setElem] = useState();

  useEffect(async () => {
    await axios.get("http://localhost:8000/getAllTasks").then((res) => {
      setArr(res.data.data);
    });
  });
  
  return (
    <div>
      <Header />
      <MainInput arr={arr} setArr={setArr} />
      <Routes>
        <Route path='/home' element={<Tasks 
          arr={arr} 
          setArr={setArr} 
          elem={elem}
          setElem={setElem} 
        />}/>
        <Route path='/routing' element={<Routing 
          elem={elem}
          setElem={setElem}/>}/>
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </div>
  );
};

export default App;
