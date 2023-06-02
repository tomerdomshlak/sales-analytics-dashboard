import React from "react";

type Props = {
  fill: string;
};

function DashboardIcon({ fill }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke={fill}
        strokeWidth="2"
        d="M7.889 18a1 1 0 01-1 1H2.222C1.552 19 1 18.448 1 17.778V2.222C1 1.552 1.552 1 2.222 1H6.89a1 1 0 011 1v16zm5.222 1a1 1 0 01-1-1v-6a1 1 0 011-1H18a1 1 0 011 1v5.778c0 .67-.552 1.222-1.222 1.222H13.11zM19 5.778a1 1 0 01-1 1h-4.889a1 1 0 01-1-1V2a1 1 0 011-1h4.667C18.448 1 19 1.552 19 2.222v3.556z"
      ></path>
    </svg>
  );
}

export default DashboardIcon;
