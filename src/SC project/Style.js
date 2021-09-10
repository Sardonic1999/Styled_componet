import styled, { css } from "styled-components";
import { ReactComponent as User } from "../assets/Users.svg";
import { ReactComponent as Lock } from "../assets/Lock.svg";
import { ReactComponent as Preferences } from "../assets/Preferences.svg";
import { ReactComponent as Time } from "../assets/Time.svg";
import { ReactComponent as Add } from "../assets/Add_user.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a393e;
  width: 100%;
  height: 100vh;
  color: white;
`;

export const Wrapper = styled.div`
  width: 360px;
  height: fit-content;
  border: 2px solid #445859;
  margin: 10px;
  padding: 30px;
  border-radius: 5px;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: rgba(234, 240, 236, 0.1);
`;

export const Description = styled.div`
  color: white;
  font-weight: 600px;
  font-size: 20px;
`;

export const Title = styled.div`
  color: #e7c961;
  font-size: 28px;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #354545;
  border-radius: 4px;
  /* background-color: rgba(104, 105, 102, 0.1); */
  background-color: #2a393e;
  margin-top: 20px;
  /* outline: none; */
  padding-left: 45px;
  color: white;
  font-size: 20px;
  ::placeholder {
    color: whitesmoke;
  }
`;

const common = css`
  position: absolute;
  top: -40%;
  left: 10px;
  width: 30px;
`;

export const UserIcon = styled(User)`
  ${common}
`;
export const LockIcon = styled(Lock)`
  ${common}
`;
export const PreferencesIcon = styled(Preferences)`
  ${common}
`;
export const TimeIcon = styled(Time)`
  ${common}
`;
export const AddIcon = styled(Add)`
  ${common}
`;

export const Button = styled.button`
  width: 120px;
  height: 50px;
  background-color: #00908d;
  color: white;
  font-weight: 700px;
  font-size: 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: ${(props) => (props.select ? "0px" : "20px")};
  margin-left: auto;
  border: 0;
  outline: none;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const CheckBox = styled.input`
  width: 30px;
  height: 30px;
  background-color: rgba(104, 105, 102, 0.1);
  border: 1px solid #354545;
  cursor: pointer;
  margin-right: 15px;
`;

export const Spam = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
`;

export const Forget = styled.div`
  margin-left: auto;
  margin-top: 20px;
  font-size: 15px;
  color: white;
  font-weight: 700px;
  font-style: italic;
  cursor: pointer;
`;
