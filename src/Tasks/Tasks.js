import React, { State, useState } from "react";
import "./Tasks.scss";
import img1 from '../img/icons8-редактировать-свойство-96.png';
import img2 from '../img/icons8-незачет-48.png';
import img3 from '../img/icons8-зачет-48.png';


const Tasks = ({arr, setArr}) => {

  const Check = ({isCheck}, index) => {
    arr[index].isCheck = !isCheck;
    setArr([...arr]);
  }

  const [red, setRed] = useState(-1);
  const [val, setVal] = useState('');

  const onChange = (event) => {
    setVal(event.target.value);
  }

  const onBlur = (index) => {
    arr[index].taskName = val;
    setArr([...arr]);
    setRed(-1);
  }
  
  const Redact = (elem, index) => {
    setRed(index);
    setVal(elem.taskName);
  }

  const Delete = (index) => {
    setArr([ ...arr.slice(0, index), ...arr.slice(index+1) ]);
  }

	return (<div>
		{arr.map((elem, index) =>
		<div className="container-task" key={`container-task-${index}`}>
      {red == index 
        ? <input 
          value={val} 
          onBlur={() => onBlur(index)} 
          onChange={(e) => onChange(e)}
          className='taskInp'
        /> 
        : <div className={elem.isCheck ?  "taskFalse": 'task'}>
            <p>{elem.taskName}</p>
        </div>
      }
      <div className="buttons">
        {!elem.isCheck && 
          <div className="redact" onClick={() => Redact(elem, index)}>
            <img src={img1}/>
          </div>}
          <div className="delete" onClick={() => Delete(index)}>
            <img src={img2}/>
          </div>
          
          <div className="checked" onClick={() => Check(elem, index)}>
            <img src={img3}/>
          </div>
      </div>
    </div>)}
	</div>);    
}

export default Tasks;