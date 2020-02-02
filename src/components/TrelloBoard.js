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
      console.log("updated");
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
  newTask: state.tasks.task
});

export default connect(mapStateToProps, { fetchTasks })(TrelloBoard);
