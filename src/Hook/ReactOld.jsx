import React, { Component } from "react";
import Hook from "./Hook";

export default class ReactOld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      status: "Student",
    };
  }
  render() {
    return (
      <>
        <Hook count={this.state.counter} />
        <h1>React Old State {this.state.counter}</h1>
        <input
          placeholder="State"
          value={this.state.status}
          onChange={(e) => {
            this.setState({ status: e.target.value });
          }}
        />
        <div>
          React Old cersion
          <button
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "10px",
              marginLeft: "20px",
              marginRight: "5px",
              cursor: "pointer",
            }}
            onClick={() => this.setState({ counter: this.state.counter - 1 })}
          >
            -
          </button>
          <button
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
          >
            +
          </button>
        </div>
      </>
    );
  }
}
