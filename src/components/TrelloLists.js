import React from "react";

import "./TrelloLists.css";
import TrelloTasks from "./TrelloTasks";

const TrelloLists = props => {
  const filterTasks = props.tasks.filter(
    task => task.name.toUpperCase().indexOf(props.filterText.toUpperCase()) !== -1
  );

  const listItems = props.lists.map(listItem => (
    <div className="list" key={listItem}>
      <h2 className="list-title">{listItem}</h2>
      <ul>
        <TrelloTasks listItem={listItem} tasks={filterTasks} />
      </ul>
    </div>
  ));
  return <div className="list-container">{listItems}</div>;
};

export default TrelloLists;
