import React from "react";
import { Icon } from "./Clock.styled";

function Clock() {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      fill="none"
      viewBox="0 0 11 11"
    >
      <path fill="#1FAD40" d="M3.85 2.75h1.1V5.5H7.7v1.1H3.85V2.75z"></path>
      <path
        fill="#1FAD40"
        fillRule="evenodd"
        d="M11 5.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-1.1 0a4.4 4.4 0 11-8.8 0 4.4 4.4 0 018.8 0z"
        clipRule="evenodd"
      ></path>
    </Icon>
  );
}

export default Clock;
