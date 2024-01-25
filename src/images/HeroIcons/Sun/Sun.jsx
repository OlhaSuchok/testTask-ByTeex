import React from "react";
import { Icon } from "./Sun.styled";

function Sun() {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      fill="none"
      viewBox="0 0 31 31"
    >
      <circle cx="15.5" cy="15.5" r="15.5" fill="#F9F0E5"></circle>
      <path
        stroke="#15005B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.1"
        d="M15.5 5.5V26M15.5 21.27a5.515 5.515 0 01-5.52-5.52 5.515 5.515 0 015.52-5.519M8.254 8.504l1.671 1.672M5.25 15.75h2.365M8.254 22.996l1.671-1.671M15.5 13.03a5.513 5.513 0 014.802-2.799c.126 0 .244.008.37.016a4.139 4.139 0 001.932 7.798c1.262 0 2.39-.568 3.146-1.459A5.513 5.513 0 0115.5 18.47"
      ></path>
    </Icon>
  );
}

export default Sun;
