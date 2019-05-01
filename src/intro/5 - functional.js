import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

const sizes = {
  desktop: 992,
  tablet: 776
};

const media = Object.entries(sizes).reduce((acc, [label, size]) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const Button = styled.button`
  padding: 6px 12px;
  color: white;
  font-size: 18px;

  ${media.desktop`background-color: #00b2a5`}
  ${media.tablet`background-color: #ffa64c`}
`;

function App() {
  return (
    <div>
      <Button primary>Button</Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
