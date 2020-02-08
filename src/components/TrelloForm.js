import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/taskActions";
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
  }

  handleChange = (e) => {
    const updatedTask = {
      ...this.state.task
    };
    updatedTask[e.target.id] = e.target.value;
    this.setState({
      task: updatedTask
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, status } = this.state.task;
    if (name.trim() !== "") {
      const task = {
        name,
        description,
        status
      };
      this.props.addTask(task);
    } else {
      alert("Warning: Task name is required!");
    }
    const resetTask = {
      name: "",
      description: "",
      status: "todo"
    };
    this.setState({ task: resetTask });
  }

  render() {
    const { name, description, status } = this.state.task;
    return (
      <div className="form">
        <h2>Add Task</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-field">
            <label>
              Task Name:
              <input
                id="name"
                type="text"
                value={name}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-field">
            <label>
              Description:
              <textarea
                id="description"
                value={description}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-field">
            <label>
              Status:
              <select id="status" value={status} onChange={this.handleChange}>
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

export default connect(null, { addTask })(TrelloForm);
