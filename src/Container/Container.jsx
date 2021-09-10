import React, { Component } from "react";
import { Containers, Wrapper, Title, Content, Button } from "../Container/Cont";
import "../Container/index.css";

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }
  render() {
    const onTrue = () => {
      this.setState({
        display: true,
      });
    };
    const onHide = () => {
      this.setState({
        display: false,
      });
    };
    return (
      <Wrapper>
        <h1>Styled-component01</h1>
        <Title color={"success"} size={"desktop"}>
          Sardor Jurayev
        </Title>
        <Title color={"warning"} size={"tablet"}>
          Sardor Jurayev
        </Title>
        <Title color={"error"} size={"mobile"}>
          Sardor Jurayev
        </Title>
        <Content>
          <Containers display={true} />
          <Containers display={this.state.display} light={true} />
          <Button onClick={onTrue}>Show</Button>
          <Button onClick={onHide}>Hide</Button>
        </Content>
      </Wrapper>
    );
  }
}
