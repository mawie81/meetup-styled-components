import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: bisque;
  }
`;

const Button = styled.button`
  padding: 6px 12px;
  color: white;
  font-size: 18px;
  background-color: ${props => (props.primary ? "#00b2a5" : "#ffa64c")};
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Button primary>Primary Button</Button>
        <Button>Secondary Button</Button>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
