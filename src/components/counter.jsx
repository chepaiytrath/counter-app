import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Counter - Update");
    if (prevProps.counter.value !== this.props.counter.value) {
      //AJAX call and get new data from server
      console.log("prevProps", prevProps);
      console.log("newProps", this.props);
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");
    return (
      // <div class="container">
      //   <div class="row">
      //     <div class="col-sm">
      //       <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
      //         {this.formatCount()}
      //       </span>
      //     </div>
      //     <div class="col-sm">
      //       <button
      //         onClick={() => this.props.onIncrement(this.props.counter)}
      //         className="btn btn-secondary  btn-sm"
      //       >
      //         +
      //       </button>
      //     </div>
      //     <div class="col-sm">
      //       <button
      //         onClick={() => this.props.onDecrement(this.props.counter)}
      //         className="btn btn-secondary  btn-sm"
      //       >
      //         -
      //       </button>
      //     </div>
      //     <div class="col-sm">
      //       <button
      //         onClick={() => {
      //           this.props.onDelete(this.props.counter.id);
      //         }}
      //         className="btn btn-danger btn-sm m-2"
      //       >
      //         X
      //       </button>
      //     </div>
      //   </div>
      // </div>

      <div className="row">
        <div className="col1">
          <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary  btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => {
              this.props.onDelete(this.props.counter.id);
            }}
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    const x = <span>Zero</span>;
    return count === 0 ? x : count;
  }
}

export default Counter;
