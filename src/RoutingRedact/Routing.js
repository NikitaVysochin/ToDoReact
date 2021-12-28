import React, { State, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from "axios";
import './Routing.scss';

const Routing = ({ arr, setArr, elem, setElem }) => {
  const { task, _id } = elem; 
  const [value, setValue] = useState(task);

  const onBlur = async () => {
    await axios
      .patch("http://localhost:8000/updateTask", {
        taskName: value,
        isCheck: false,
        _id,
      })
      .then((res) => {
        setArr(res.data.data);
      });
  };

  return (
    <div className='main-route'>
      <Link to='/'><div className='button-Cancel'>Cancel</div></Link>
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <Link to='/'><div className='button-return' onClick={onBlur}>Save</div></Link>
    </div>
  )
}

export default Routing;