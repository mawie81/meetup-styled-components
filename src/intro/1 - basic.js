import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 6px 12px;
  color: white;
  font-size: 18px;
  background-color: ${props => (props.primary ? "#00b2a5" : "#ffa64c")};
  ${props =>
    props.primary &&
    css`
      border: 2px solid darkblue;
    `}
`;

function App({ className }) {
  return (
    <div className={className}>
      <Button primary>Primary Button</Button>
      <Button>Secondary Button</Button>
      <div
        css={`
          border: 1px solid red;
        `}
      >
        This works only with the babel plugin
      </div>
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
