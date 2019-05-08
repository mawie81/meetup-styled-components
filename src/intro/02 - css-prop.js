import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

function App() {
  return (
    <div>
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
