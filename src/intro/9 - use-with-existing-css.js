import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Button = styled.button.attrs({ className: "btn" })`
  padding: 6px 12px;
  color: white;
  font-size: 18px;
  background-color: ${props => (props.primary ? "#00b2a5" : "#ffa64c")};
`;

const PasswordInput = styled.input.attrs({ type: "password" })`
  border: 1px solid red;
  padding: 6px 12px;
`;

function App({ className }) {
  return (
    <div className={className}>
      <Button primary>Primary Button</Button>
      <PasswordInput />
    </div>
  );
}

const StyledApp = styled(App)`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 10px;
  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<StyledApp />, rootElement);
