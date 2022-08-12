import React, {useState} from "react";
import Task from "./Task"

function TaskList({tasks}) {
  const [deleted, setDeleted] = useState([])

  function deleteTask(task) {
    const deletedArray = [...deleted, task]
    setDeleted(deletedArray)
  }

  const tasksToDisplay = tasks.filter(task => deleted.indexOf(task) > -1 ? false : true)
  
  return (
    <div className="tasks">
      {tasksToDisplay.map(task => (
        <Task key={task.text} text={task.text} category={task.category} onDeleteTask={() => deleteTask(task)} />
      ))}
    </div>
  );
}

export default TaskList;
