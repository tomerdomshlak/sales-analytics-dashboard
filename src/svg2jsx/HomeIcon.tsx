import React from "react";

type Props = {
  fill: string;
};

function HomeIcon({ fill }: Props) {
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
        d="M1 11h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 00.707-1.707l-9-9a1 1 0 00-1.414 0l-9 9A1 1 0 001 11zm7 7v-5h4v5H8zm2-15.586l6 6V18h-2v-5c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2v5H4V8.414l6-6z"
      ></path>
    </svg>
  );
}

export default HomeIcon;
