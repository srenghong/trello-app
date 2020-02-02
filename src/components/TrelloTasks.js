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

    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    ReactModal.setAppElement("body");
  }

  handleDelete(e, taskId) {
    e.preventDefault();
    this.props.removeTask(taskId);
  }

  handleChange(e) {
    this.setState({ updateStatus: e.target.value });
  }

  handleUpdate(e, taskId) {
    const task = {
      id: taskId,
      status: this.state.updateStatus
    };
    this.props.updateTask(task);
    this.handleCloseModal();
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
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
          <button
            className="remove"
            onClick={e => this.handleDelete(e, task.id)}
          >
            Remove
          </button>
          <button onClick={this.handleOpenModal}>Update Status</button>
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
              className="confirm"
              onClick={e => this.handleUpdate(e, task.id)}
            >
              Confirm
            </button>
            <button className="cancel" onClick={this.handleCloseModal}>
              Cancel
            </button>
          </ReactModal>
        </li>
      ));
  }
}

export default connect(null, { removeTask, updateTask })(TrelloTasks);
