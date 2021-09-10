import styled, { css } from "styled-components";

const getFontsize = ({ size }) => {
  switch (size) {
    case "desktop":
      return "35px";
    case "tablet":
      return "30px";
    case "mobile":
      return "25px";
    default:
      return "25px";
  }
};

const getColor = ({ color }) => {
  switch (color) {
    case "error":
      return "red";
    case "warning":
      return "yellow";
    case "success":
      return "green";
    default:
      return "black";
  }
};

const common = css`
  background-color: rgb(126, 117, 117);
  border-radius: 8px;
  width: 1400px;
`;

export const Containers = styled.div`
  background-color: ${({ light }) => (light ? "yellow" : "black")};
  border-radius: 8px;
  width: 200px;
  height: 200px;
  margin-left: 100px;
  display: ${({ display }) => (display ? "flex" : "none")};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0px 0px 100px;
  ${common}
`;

export const Title = styled.h1`
  color: ${getColor};
  font-size: ${getFontsize};
`;

export const Content = styled.div`
  display: flex;
`;

export const Button = styled.button`
  color: var(--textcolor);
  background: var(--background);
`;
