import React, { Component } from "react";
import ReactModal from "react-modal";
import { connect } from "react-redux";
import { removeTask, updateTask } from "../actions/taskActions";
import "./TrelloTasks.css";

class TrelloTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      updateStatus: "todo"
    };
  }

  componentDidMount() {
    ReactModal.setAppElement("body");
  }

  handleDelete = (e) => {
    e.preventDefault();
    this.props.removeTask(e.target.id);
  }

  handleChange = (e) => {
    this.setState({ updateStatus: e.target.value });
  }

  handleUpdate = (e) => {
    const task = {
      id: e.target.id,
      status: this.state.updateStatus
    };
    this.props.updateTask(task);
    this.handleModal();
  }

  handleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return this.props.tasks
      .filter(task => task.name.trim() !== "")
      .filter(
        task => task.status.toLowerCase() === this.props.listItem.toLowerCase()
      )
      .map(task => (
        <li key={task.id} className="task">
          <div className="task-name">{task.name}</div>
          <div className="task-description">
            Description: {task.description ? task.description : "none"}
          </div>
          <button
            id={task.id}
            className="remove"
            onClick={this.handleDelete}
          >
            Remove
          </button>
          <button onClick={this.handleModal}>Update Status</button>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Update Status Popup"
            className="Modal"
          >
            <div>
              <h3>Update Status</h3>
              <select
                value={this.state.updateStatus}
                onChange={this.handleChange}
              >
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="testing">Testing</option>
                <option value="done">Done</option>
              </select>
            </div>
            <button
              id={task.id}
              className="confirm"
              onClick={this.handleUpdate}
            >
              Confirm
            </button>
            <button className="cancel" onClick={this.handleModal}>
              Cancel
            </button>
          </ReactModal>
        </li>
      ));
  }
}

export default connect(null, { removeTask, updateTask })(TrelloTasks);
