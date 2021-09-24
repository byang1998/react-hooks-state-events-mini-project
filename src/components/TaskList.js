import React from "react";
import Task from "./Task";


function TaskList({tasks}) {

  console.log(tasks)

  const taskList =  tasks.map((task) => (
  <Task/>




  ));
  return (
    <div className="tasks">{taskList}</div>
  );
}

export default TaskList;
