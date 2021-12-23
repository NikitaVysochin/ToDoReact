import logo from "./logo.svg";
import "./App.scss";
import React, { State, useState } from "react";
import Test from "./Header/Header";
import MainInput from "./MainInput/MainInput"
import Tasks from "./Tasks/Tasks";

const App = () => {
  let temp = [
    {
      taskName: "задача",
      isCheck: false,
    },
    {
      taskName: "задача3",
      isCheck: false,
    }
  ];
  const [arr, setArr] = useState(temp);

  return (<div>
    <Test/>
    <MainInput 
      arr={arr} 
      setArr={setArr}
    />
    <Tasks 
      arr={arr} 
      setArr={setArr} 
    />
  </div>);
}

export default App;
