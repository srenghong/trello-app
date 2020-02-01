import React from "react";

import "./TrelloLists.css";
import TrelloTasks from "./TrelloTasks";

const TrelloLists = props => {
  const listItems = props.lists.map(listItem => (
    <div className="list" key={listItem}>
      <h2 className="list-title">{listItem}</h2>
      <ul>
        <TrelloTasks listItem={listItem} tasks={props.tasks} />
      </ul>
    </div>
  ));

  return <div className="list-container">{listItems}</div>;
};

export default TrelloLists;
