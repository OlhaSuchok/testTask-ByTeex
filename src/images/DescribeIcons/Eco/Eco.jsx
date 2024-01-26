import React from "react";
import { Icon } from "./Eco.styled";

function Eco() {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="127"
      height="17"
      fill="none"
      viewBox="0 0 127 17"
    >
      <path
        fill="url(#pattern0)"
        fillOpacity="0.3"
        d="M0 0.677H126.436V16.342H0z"
      ></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.00084 0 0 .00676 -.002 0)"
            xlinkHref="#image0_1_1646"
          ></use>
        </pattern>
        <image
          id="image0_1_1646"
          width="1200"
          height="148"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </Icon>
  );
}

export default Eco;
