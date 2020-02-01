import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 3 },
      { id: 4, value: 1 }
    ]
  };

  handleDelete = counterid => {
    console.log("handleDelete called for ", counterid);
    const counters = this.state.counters.filter(c => c.id !== counterid);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            selected
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
