import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const PrimaryButton = styled.button`
  padding: 6px 12px;
  color: white;
  font-size: 18px;
  background-color: #00b2a5;
`;

const SecondaryButton = styled(PrimaryButton)`
  background-color: #ffa64c;
`;

function App() {
  return (
    <div>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
