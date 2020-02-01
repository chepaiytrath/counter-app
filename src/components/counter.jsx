import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  constructor() {
    super();
    console.log("Constructor", this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement = () => {
    console.log("Increment Clicked", this);
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary  btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    const x = <h1>Zero</h1>;
    return count === 0 ? x : count;
  }
}

export default Counter;
