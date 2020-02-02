import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTasks } from "../actions/taskActions";
import TrelloLists from "./TrelloLists";
import TrelloForm from "./TrelloForm";
import TrelloFilterBox from "./TrelloFilterBox";

class TrelloBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ""
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchTasks();
  }

  componentDidUpdate(prevProps) {
    if (this.props.update) {
      this.props.fetchTasks();
    }
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    const lists = ["TODO", "DOING", "TESTING", "DONE"];
    return (
      <div>
        <h1>Trello Board</h1>
        <TrelloFilterBox
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <TrelloForm />
        <TrelloLists
          lists={lists}
          tasks={this.props.tasks}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  update: state.tasks.update
});

export default connect(mapStateToProps, { fetchTasks })(TrelloBoard);
