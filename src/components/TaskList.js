import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  const tasksElements = tasks.map(task => <Task category={task.category} text={task.text} key={task.text}/>)


  return (
    <div className="tasks">
      {tasksElements}
    </div>
  );
}

export default TaskList;
