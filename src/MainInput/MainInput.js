import React, { State, useState } from "react";
import "./MainInput.scss";

const Input = ({arr, setArr}) => {
	const [inp, setInp] = useState('');

const Change = (event) => {
  setInp(event.target.value);
}

const Add = () => {
  setArr([ ...arr, {
    taskName: inp,
    isCheck: false,
  }]);
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