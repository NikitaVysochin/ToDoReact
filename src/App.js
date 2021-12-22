import logo from "./logo.svg";
import "./App.scss";
import React, { State, useState } from "react";
import Test from "./Header/Test";
import MainInput from "./MainInput/MainInput"
import Tasks from "./Tasks/Tasks";


function App() {

  return <>
  <Test/>
  <MainInput/>
  <Tasks/>
  </>
}

export default App;
