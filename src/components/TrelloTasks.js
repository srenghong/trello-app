import React from "react";

import "./TrelloTasks.css";

const TrelloTasks = props =>
  props.tasks
    .filter(task => task.name !== "")
    .filter(task => task.status.toLowerCase() === props.listItem.toLowerCase())
    .map(task => (
      <li key={task.id} className="task">
        {task.name}
      </li>
    ));

export default TrelloTasks;
