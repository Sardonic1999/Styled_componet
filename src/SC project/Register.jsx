import React from "react";
import {
  Wrapper,
  Description,
  Title,
  InputWrapper,
  Input,
  PreferencesIcon,
  TimeIcon,
  AddIcon,
  Button,
} from "./Style";

function Register() {
  return (
    <Wrapper>
      <Description>Don't have an account</Description>
      <Title>Register Now</Title>
      <InputWrapper>
        <PreferencesIcon />
        <Input placeholder="Preferences" />
      </InputWrapper>
      <InputWrapper>
        <TimeIcon />
        <Input placeholder="Time" />
      </InputWrapper>
      <InputWrapper>
        <AddIcon />
        <Input placeholder="AddIcon" />
      </InputWrapper>
      <Button>Log In</Button>
    </Wrapper>
  );
}

export default Register;
