import axios from "axios";
import React, { State, useState } from "react";
import "./MainInput.scss";

const Input = ({arr, setArr}) => {
	const [inp, setInp] = useState('');

const Change = (event) => {
  setInp(event.target.value);
}

const Add = async () => {
  await axios.post('http://localhost:8000/createTask', {
    taskName: inp,
    isCheck: false,
  }).then(res => {
      setArr(res.data.data)
    })
  setInp('');
}
  
  return (<div>
		<div className="container">
      <div className="inp">
        <input className="mainInp" value={inp} onChange={(event) => Change(event)}/>
      </div>
      <div className="mainButton" onClick={() => Add()}>Add Task</div>
    </div>
	</div>);
}

export default Input;