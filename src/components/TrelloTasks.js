import React, { Component } from "react";
import { connect } from 'react-redux';
import { removeTask } from '../actions/taskActions';
import "./TrelloTasks.css";

class TrelloTasks extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e, taskId) {
    e.preventDefault();
    this.props.removeTask(taskId);
  }

  render() {
    return this.props.tasks
      .filter(task => task.name !== "")
      .filter(
        task => task.status.toLowerCase() === this.props.listItem.toLowerCase()
      )
      .map(task => (
        <li key={task.id} className="task">
          <div className="task-name">{task.name}</div>
          <div className="task-description">
            Description: {task.description ? task.description : "none"}
          </div>
          <button onClick={e => this.handleDelete(e, task.id)}>Remove</button>
        </li>
      ));
  }
}

export default connect(null, { removeTask })(TrelloTasks);
