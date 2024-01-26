import React from "react";
import { Icon } from "./Leaf.styled";

function Leaf() {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      fill="none"
      viewBox="0 0 42 42"
    >
      <circle cx="21" cy="21" r="21" fill="#F9F0E5"></circle>
      <path
        fill="#01005B"
        d="M31.677 29.817a.963.963 0 00-1.353.085c-1.608 1.807-3.396 1.15-4.229.676 1.718-10.82-2.166-12.834-7.506-15.604-2.247-1.164-4.792-2.488-7.365-4.736a.965.965 0 00-.913-.197.952.952 0 00-.648.666c-1.396 5.267-.573 10.389 2.327 14.416 2.848 3.957 7.356 6.375 12.705 6.83.762.53 1.94 1.047 3.245 1.047 1.244 0 2.602-.47 3.822-1.84a.95.95 0 00-.085-1.343zm-18.126-5.802c-2.294-3.182-3.113-7.158-2.365-11.336 2.303 1.798 4.522 2.948 6.513 3.98 4.872 2.526 7.71 4 6.698 12.215l-2.473-2.995.52-3.07a.952.952 0 00-.79-1.094.958.958 0 00-1.102.78l-.241 1.431-3.33-4.032-1.864-2.807a.96.96 0 00-1.33-.273.947.947 0 00-.274 1.315l1.887 2.85a.514.514 0 00.062.079l.965 1.169-.695.01a.959.959 0 00-.946.962c.009.52.435.938.96.938h.014l2.223-.032 4.645 5.628c-3.793-.798-6.963-2.78-9.077-5.718z"
      ></path>
    </Icon>
  );
}

export default Leaf;
