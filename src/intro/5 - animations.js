import React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

const scale = keyframes`
  from {
    transform: scale(1)
  }

  to {
    transform: scale(1.2)
  }
`;

const Heading = styled.h1`
  padding: 6px 12px;
  color: white;
  background-color: #00b2a5;

  &:hover {
    animation: ${scale} 1s ease forwards;
  }
`;

function App() {
  return (
    <div>
      <Heading>A heading</Heading>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
