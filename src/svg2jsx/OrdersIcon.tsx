import React from "react";

type Props = {
  fill: string;
};

function OrdersIcon({ fill }: Props) {
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
        d="M18.571 0H1.43A1.429 1.429 0 000 1.429V18.57A1.429 1.429 0 001.429 20H18.57A1.429 1.429 0 0020 18.571V1.43A1.429 1.429 0 0018.571 0zm-2.428 2.857a1 1 0 011 1v3.714a1 1 0 01-1 1h-3.714a1 1 0 01-1-1V3.857a1 1 0 011-1h3.714zm-8.572 0a1 1 0 011 1v3.714a1 1 0 01-1 1H3.857a1 1 0 01-1-1V3.857a1 1 0 011-1h3.714zM3.857 17.143a1 1 0 01-1-1v-3.714a1 1 0 011-1h3.714a1 1 0 011 1v3.714a1 1 0 01-1 1H3.857zm8.572 0a1 1 0 01-1-1v-3.714a1 1 0 011-1h3.714a1 1 0 011 1v3.714a1 1 0 01-1 1h-3.714z"
      ></path>
    </svg>
  );
}

export default OrdersIcon;
