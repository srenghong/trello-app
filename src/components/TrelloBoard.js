import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTasks } from "../actions/taskActions";
import TrelloLists from "./TrelloLists";
import TrelloForm from "./TrelloForm";

class TrelloBoard extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  componentDidUpdate(prevProps) {
    if (this.props.newTask.id !== prevProps.newTask.id) {
      console.log("updated add");
      this.props.fetchTasks();
    }
    if (this.props.tasks.map(task => task.id).includes(this.props.deleteTaskId)) {
      console.log("updated remove");
      this.props.fetchTasks();
    }
  }

  render() {
    const lists = ["TODO", "DOING", "TESTING", "DONE"];
    return (
      <div>
        <h1>Trello Board</h1>
        <TrelloForm></TrelloForm>
        <TrelloLists lists={lists} tasks={this.props.tasks} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  newTask: state.tasks.task,
  deleteTaskId: state.tasks.deleteTaskId
});

export default connect(mapStateToProps, { fetchTasks })(TrelloBoard);
