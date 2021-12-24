import logo from "./logo.svg";
import "./App.scss";
import React, { State, useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header/Header";
import MainInput from "./MainInput/MainInput";
import Tasks from "./Tasks/Tasks";

const App = () => {
  const [arr, setArr] = useState([]);

  /*let temp = [
    {
      taskName: "задача",
      isCheck: false,
    },
    {
      taskName: "задача3",
      isCheck: false,
    }
  ];*/

  useEffect(async () => {
    await axios.get("http://localhost:8000/getAllTasks").then((res) => {
      setArr(res.data.data);
    });
  });

  
  return (
    <div>
      <Header />
      <MainInput arr={arr} setArr={setArr} />
      <Tasks arr={arr} setArr={setArr} />
    </div>
  );
};

export default App;
