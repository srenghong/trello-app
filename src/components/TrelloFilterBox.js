import React, { Component } from "react";

class TrelloFilterBox extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTasks = this.handleFilterTasks.bind(this);
  }

  handleFilterTasks(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <>
        <span style={{ "fontSize": "14px", "paddingRight": "10px" }}>
          Filter (by name):
        </span>
        <input
          className="input"
          type="text"
          placeholder="Search ..."
          value={this.props.filterText}
          onChange={this.handleFilterTasks}
        />
      </>
    );
  }
}

export default TrelloFilterBox;
