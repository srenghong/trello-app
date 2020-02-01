import React, { Component } from "react";
import TrelloLists from "./TrelloLists";
import TrelloForm from "./TrelloForm";

class TrelloBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3004/tasks")
      .then(res => res.json())
      .then(tasks => this.setState({ tasks: tasks }))
      .catch(error => console.error(error));
  }

  render() {
    const lists = ["TODO", "DOING", "TESTING", "DONE"];
    return (
      <div>
        <h1>Trello Board</h1>
        <TrelloForm></TrelloForm>
        <TrelloLists lists={lists} tasks={this.state.tasks} />
      </div>
    );
  }
}

export default TrelloBoard;
