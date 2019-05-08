import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

const Link = styled.a`
  padding: 6px 12px;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  background-color: ${props => (props.primary ? "#00b2a5" : "#ffa64c")};
`;

const Icon = styled.svg`
  width: 32px;
  height: 32px;
  fill: red;
  margin-right: 5px;

  ${Link}:hover & {
    fill: blue;
  }
`;

function App() {
  return (
    <div>
      <Link href="https://google.de">
        <Icon viewBox="0 0 32 32">
          <path d="M20.692 1.251c.52.01 1.036.052 1.549.138 1.075.181 2.12.536 3.083 1.047a10.419 10.419 0 0 1 3.289 2.749 10.295 10.295 0 0 1 1.84 3.641 10.166 10.166 0 0 1-.715 7.216 10.381 10.381 0 0 1-4.414 4.521c-.963.511-2.008.867-3.083 1.047a10.25 10.25 0 0 1-7.569-1.721l-.076-.054L3.61 30.831l-2.481-2.482L12.118 17.4a10.423 10.423 0 0 1-1.479-3.103 10.231 10.231 0 0 1-.179-4.853 10.213 10.213 0 0 1 1.283-3.245 10.404 10.404 0 0 1 4.78-4.138 10.174 10.174 0 0 1 4.169-.81zm-.279 3.5a6.686 6.686 0 0 0-2.751.633 6.875 6.875 0 0 0-3.278 3.278 6.654 6.654 0 0 0-.579 3.692c.088.686.285 1.358.579 1.984a6.865 6.865 0 0 0 3.502 3.379 6.676 6.676 0 0 0 5.074.06 6.888 6.888 0 0 0 3.507-3.148 6.68 6.68 0 0 0 .769-3.56 6.664 6.664 0 0 0-.457-2.031 6.876 6.876 0 0 0-3.293-3.583 6.73 6.73 0 0 0-2.727-.7 7.965 7.965 0 0 0-.346-.004z" />
        </Icon>
        Link
      </Link>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
