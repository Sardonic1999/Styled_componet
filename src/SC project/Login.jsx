import React from "react";
import {
  Wrapper,
  Description,
  Title,
  InputWrapper,
  Input,
  UserIcon,
  LockIcon,
  Info,
  Button,
  CheckBox,
  Spam,
  Forget,
} from "./Style";

function Login() {
  return (
    <Wrapper>
      <Description>Already have an account</Description>
      <Title>Log in Here</Title>
      <InputWrapper>
        <UserIcon />
        <Input placeholder="Username" />
      </InputWrapper>
      <InputWrapper>
        <LockIcon />
        <Input placeholder="Password" />
      </InputWrapper>
      <Info>
        <Spam>
          <CheckBox type="checkbox" />
          Keep me logged in
        </Spam>
        <Button select>Log In</Button>
      </Info>
      <Forget>Forget your password?</Forget>
    </Wrapper>
  );
}

export default Login;
