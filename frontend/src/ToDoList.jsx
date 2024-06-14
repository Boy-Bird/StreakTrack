import React, { useState, useEffect } from "react";
import { FaTrashAlt } from 'react-icons/fa';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log(err));
  }, []);

  const handleCheck = (id) => {
    const listTasks = tasks.map((task) => task.id === id ? { ...task, complete: !task.complete} : task);
    setTasks(listTasks);
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      mode: 'cors'
    })
  }

  const handleDelete = (id) => {
    const listTasks = tasks.filter((task) => task.id !== id);
    setTasks(listTasks);
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
      mode: 'cors',
    })
  }
  
  return (
    <div id="toDo">
      <h1>Tasks</h1>
      <p>You are focusing on</p>
      <nav>
        <ul> 
          {tasks.map((task) => (
            <li className="task" key={task.id}>
              <input 
                type="checkbox"
                onChange={() => handleCheck(task.id)}
                checked={task.complete}
              />
              <label
                style={(task.complete) ? {textDecoration: "line-through"} : null}
                onDoubleClick={()=>handleCheck(task.id)}
              >{task.task}</label>              
              <FaTrashAlt 
                onClick={() => handleDelete(task.id)}
                role="button" 
                tabIndex="0" 
              />
            </li>
            // <div>
            //   <input id='complete' type="checkbox" />
            //   {/* {document.getElementById('complete').checked && <li style={{textDecoration: "line-through"}}>{task.task}</li>} */}
            //   {/* {!document.getElementById('complete').checked && <li>{task.task}</li>}  */}
            //   <li>{task.task}</li>
            // </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ToDoList;
