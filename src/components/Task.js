import React from "react";

function Task({text, category}) {
  function handleDelete(e){
    e.target.parentNode.remove()
  }


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={e => handleDelete(e)}>X</button>
    </div>
  );
}

export default Task;
