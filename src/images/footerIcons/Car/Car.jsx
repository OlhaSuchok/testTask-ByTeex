import React from "react";
import { Icon } from "./Car.styled";

function Car() {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      fill="none"
      viewBox="0 0 33 33"
    >
      <path
        stroke="#676869"
        strokeWidth="1.1"
        d="M5.813 13.914h3.594m-3.594 5.12h3.594M3 16.475h6.407"
      ></path>
      <circle
        cx="16.5"
        cy="16.5"
        r="16.5"
        fill="#666"
        fillOpacity="0.1"
      ></circle>
      <path
        fill="#676869"
        stroke="#676869"
        strokeWidth="0.5"
        d="M19.853 21.246h-4.934v-.747h4.187v-8.752H9.825v8.752h1.56v.747H9.077V11h10.775v10.246z"
      ></path>
      <path
        fill="#676869"
        stroke="#676869"
        strokeWidth="0.5"
        d="M27 21.246h-2.362V20.5h1.615v-3.407l-3.267-3.689h-3.133V20.5h1.251v.746h-1.998v-8.589h4.216L27 16.81v4.436z"
      ></path>
      <path
        fill="#676869"
        stroke="#676869"
        strokeWidth="0.5"
        d="M22.893 23.68a2.23 2.23 0 01-2.228-2.228c0-1.228 1-2.228 2.229-2.228 1.228 0 2.228 1 2.228 2.228 0 1.229-1 2.229-2.229 2.229zm0-3.71c-.816 0-1.481.665-1.481 1.482s.665 1.482 1.482 1.482 1.481-.665 1.481-1.482-.664-1.481-1.482-1.481zM13.184 23.68a2.23 2.23 0 01-2.228-2.228c0-1.228 1-2.228 2.228-2.228 1.229 0 2.228 1 2.228 2.228 0 1.229-1 2.229-2.228 2.229zm0-3.71c-.817 0-1.481.665-1.481 1.482s.664 1.482 1.481 1.482c.817 0 1.482-.665 1.482-1.482s-.665-1.481-1.482-1.481z"
      ></path>
    </Icon>
  );
}

export default Car;
