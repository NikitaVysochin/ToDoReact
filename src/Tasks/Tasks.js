import React from 'react';
import "./Tasks.scss";
import img1 from '../img/icons8-редактировать-свойство-96.png';
import img2 from '../img/icons8-незачет-48.png';
import img3 from '../img/icons8-зачет-48.png';

function Tasks() {
	return <>
		<div className="container-task">
      <div className='task'>
        <p>Задача</p>
      </div>
      <div className="buttons">
        <div className="redact"><img src={img1}/></div>
        <div className="delete"><img src={img2}/></div>
        <div className="checked"><img src={img3}/></div>
      </div>
    </div>
    <div className="container-task">
      <div className='task'>
        <p>Задача</p>
      </div>
      <div className="buttons">
        <div className="redact"><img src={img1}/></div>
        <div className="delete"><img src={img2}/></div>
        <div className="checked"><img src={img3}/></div>
      </div>
    </div>
	</>;
}

export default Tasks;