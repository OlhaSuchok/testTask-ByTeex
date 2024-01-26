import React from "react";
import { Icon } from "./Sun.styled";

function Sun() {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      fill="none"
      viewBox="0 0 60 60"
    >
      <path
        stroke="#15005B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M30 5.625v48.75M30 43.125c-7.256 0-13.125-5.869-13.125-13.125S22.744 16.875 30 16.875M12.769 12.769l3.975 3.975M5.625 30h5.625M12.769 47.231l3.975-3.975M30 23.531a13.11 13.11 0 0111.419-6.656c.3 0 .581.019.881.038a9.822 9.822 0 00-5.25 8.7 9.843 9.843 0 009.844 9.843c3 0 5.681-1.35 7.481-3.469-.975 6.32-6.394 11.138-12.956 11.138A13.11 13.11 0 0130 36.469"
      ></path>
    </Icon>
  );
}

export default Sun;
