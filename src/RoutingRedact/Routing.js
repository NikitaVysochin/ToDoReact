import React, { State, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Routing.scss';
import axios from "axios";

const Routing = ({arr, setArr, elem, setElem}) => {
  const [value, setValue] = useState(elem.elem);

  const onBlur = async () => {
    await axios
      .patch("http://localhost:8000/updateTask", {
        taskName: value,
        isCheck: false,
        _id: elem._id
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