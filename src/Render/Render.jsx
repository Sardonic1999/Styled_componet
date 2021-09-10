import React, { Component } from "react";
import "../Render/Style.css";
import Carousel from "../Carusel/Carousel";
import Container from "../Container/Container";
import Form from "../SC project/Form";

export default class Render extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLog: false,
      isActive: "Carousel",
    };
  }
  render() {
    const change = (name) => {
      this.setState({ isActive: name });
      // this.setState({isLog: !this.state.isLog})
    };
    return (
      <div>
        <div className="container">
          <div
            onClick={() => change("Carousel")}
            className={this.state.isActive === "Carousel" ? "tab" : "item"}
          >
            Carousel
          </div>
          <div
            onClick={() => change("Container")}
            className={this.state.isActive === "Container" ? "tab" : "item"}
          >
            Container
          </div>
          <div
            onClick={() => change("Form")}
            className={this.state.isActive === "Form" ? "tab" : "item"}
          >
            Form
          </div>
          <div
            onClick={() => change("Map")}
            className={this.state.isActive === "Map" ? "tab" : "item"}
          >
            Map
          </div>
          <div
            onClick={() => change("None")}
            className={this.state.isActive === "None" ? "tab" : "item"}
          >
            None
          </div>
        </div>
        {/* <h3>{this.state.isActive}</h3> */}
        {this.state.isActive === "Carousel" && <Carousel />}
        {this.state.isActive === "Container" && <Container />}
        {this.state.isActive === "Form" && <Form />}
        {this.state.isActive === "Map"}
        {this.state.isActive === "None"}
      </div>
    );
  }
}
