import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Button = styled.button`
  padding: 6px 12px;
  color: white;
  font-size: 18px;
  background-color: #00b2a5;
`;

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <div>{count}</div>
      <Button onClick={() => setCount(count + 1)}>Primary Button</Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
