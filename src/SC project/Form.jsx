import React from "react";
import Login from "./Login";
import Register from "./Register";
import { Container } from "./Style";

function Form() {
  return (
    <Container>
      <Login />
      <Register />
    </Container>
  );
}

export default Form;
