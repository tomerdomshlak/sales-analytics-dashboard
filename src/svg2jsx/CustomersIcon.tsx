import React from "react";

type Props = {
  fill: string;
};

function CustomersIcon({ fill }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      fill="none"
      viewBox="0 0 20 21"
    >
      <path
        fill={fill}
        d="M3.534 11.07a1 1 0 11.733 1.86A3.58 3.58 0 002 16.26V18a1 1 0 001 1h8a1 1 0 001-1v-1.647a3.658 3.658 0 00-2.356-3.419 1 1 0 11.712-1.868A5.658 5.658 0 0114 16.353V18a3 3 0 01-3 3H3a3 3 0 01-3-3v-1.74a5.58 5.58 0 013.534-5.19zM7 1a4 4 0 014 4v2a4 4 0 11-8 0V5a4 4 0 014-4zm0 2a2 2 0 00-2 2v2a2 2 0 104 0V5a2 2 0 00-2-2zm9 17a1 1 0 010-2h1a1 1 0 001-1v-1.838a3.386 3.386 0 00-2.316-3.213 1 1 0 01.632-1.898A5.387 5.387 0 0120 15.162V17a3 3 0 01-3 3h-1zM13 2a1 1 0 110-2 4 4 0 014 4v2a4 4 0 01-4 4 1 1 0 110-2 2 2 0 002-2V4a2 2 0 00-2-2z"
      ></path>
    </svg>
  );
}

export default CustomersIcon;
