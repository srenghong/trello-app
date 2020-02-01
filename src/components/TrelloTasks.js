import React from "react";

import "./TrelloTasks.css";

const TrelloTasks = props =>
  props.tasks
    .filter(task => {
      return task.status.toLowerCase() === props.listItem.toLowerCase();
    })
    .map(task => (
      <li key={task.name} className="task">
        {task.name}
      </li>
    ));

export default TrelloTasks;
