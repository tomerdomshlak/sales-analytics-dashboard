import React from "react";

type Props = {
  fill: string;
};

function ReportsIcon({ fill }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill={fill}
        d="M14.144 0H5.856L0 5.856v8.288L5.856 20h8.288L20 14.144V5.856L14.144 0zm3.634 13.222l-4.556 4.556H6.778l-4.556-4.556V6.778l4.556-4.556h6.444l4.556 4.556v6.444z"
      ></path>
      <path
        fill={fill}
        d="M10 15.556a1.111 1.111 0 100-2.223 1.111 1.111 0 000 2.223zM8.889 4.444h2.222v7.778H8.89V4.444z"
      ></path>
    </svg>
  );
}

export default ReportsIcon;
