import React, { Component } from "react";

import "./TrelloForm.css";

class TrelloForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        name: "",
        description: "",
        status: "todo"
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, field) {
    const updatedTask = {
      ...this.state.task
    };
    updatedTask[field] = e.target.value;
    this.setState({
      task: updatedTask
    });
  }

  handleSubmit(e) {
    fetch("http://localhost:3004/tasks", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.task)
    });
    e.preventDefault();
    this.setState({
      task: {
        name: "",
        description: "",
        status: "todo"
      }
    });
  }

  render() {
    return (
      <div className="form">
        <h2>Add Task</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-field">
            <label>
              Task Name:{" "}
              <input
                type="text"
                value={this.state.task.name}
                onChange={e => this.handleChange(e, "name")}
              />
            </label>
          </div>
          <div className="form-field">
            <label>
              Description:{" "}
              <textarea
                value={this.state.task.description}
                onChange={e => this.handleChange(e, "description")}
              />
            </label>
          </div>
          <div className="form-field">
            <label>
              Status:
              <select
                value={this.state.task.status}
                onChange={e => this.handleChange(e, "status")}
              >
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="testing">Testing</option>
                <option value="done">Done</option>
              </select>
            </label>
          </div>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default TrelloForm;
