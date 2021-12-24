import React, { State, useState } from "react";
import "./Tasks.scss";
import img1 from "../img/icons8-редактировать-свойство-96.png";
import img2 from "../img/icons8-незачет-48.png";
import img3 from "../img/icons8-зачет-48.png";
import axios from "axios";

const Tasks = ({ arr, setArr }) => {
  const Check = async ({ isCheck, taskName, _id }) => {
    await axios
      .patch(`http://localhost:8000/updateTask`, {
        taskName,
        isCheck: !isCheck,
        _id
      })
      .then((res) => {
        setArr(res.data.data);
      });
  };

  const [red, setRed] = useState(-1);
  const [val, setVal] = useState("");

  const onChange = (event) => {
    setVal(event.target.value);
  };

  const onBlur = async ({ isCheck, _id }, index) => {
    await axios
      .patch("http://localhost:8000/updateTask", {
        taskName: val,
        isCheck,
        _id,
      })
      .then((res) => {
        setArr(res.data.data);
      });
    setRed(-1);
  };

  const Redact = (elem, index) => {
    setRed(index);
    setVal(elem.taskName);
  };

  const Delete = async (elem) => {
    await axios
      .delete(`http://localhost:8000/deleteTask?_id=${elem._id}`)
      .then((res) => {
        setArr(res.data.data);
      });
  };

  return (
    <div>
      {arr
        .sort((a, b) => a.isCheck - b.isCheck)
        .map((elem, index) => (
          <div className="container-task" key={`container-task-${index}`}>
            {red == index ? (
              <input
                value={val}
                onBlur={() => onBlur(elem, index)}
                onChange={(e) => onChange(e)}
                className="taskInp"
              />
            ) : (
              <div className={elem.isCheck ? "taskFalse" : "task"}>
                <p>{elem.taskName}</p>
              </div>
            )}
            <div className="buttons">
              {!elem.isCheck && (
                <div className="redact" onClick={() => Redact(elem, index)}>
                  <img src={img1} />
                </div>
              )}
              <div className="delete" onClick={() => Delete(elem)}>
                <img src={img2} />
              </div>

              <div className="checked" onClick={() => Check(elem)}>
                <img src={img3} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Tasks;
