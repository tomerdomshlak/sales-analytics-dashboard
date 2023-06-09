import React from "react";

type Props = {
  fill: string;
};

function TotalSalesIcon({ fill }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <rect width="40" height="40" fill={fill} rx="10"></rect>
      <path
        fill="#0B1E51"
        d="M9.312 27.42a.9.9 0 001.376 1.16l-1.376-1.16zM30 12l-9.747 3.606 7.996 6.638L30 12zM19.045 23.949l-.422.795.422-.795zm1.238-.244l-.692-.575.692.575zm-5.644-1.203l-.688-.58.688.58zm1.233-.238l-.422.794.422-.794zm-5.184 6.316l4.639-5.498-1.376-1.16-4.639 5.498 1.376 1.16zm4.762-5.522l3.173 1.686.844-1.59-3.173-1.685-.844 1.59zm5.526 1.221l4.543-5.472-1.385-1.15-4.543 5.473 1.385 1.15zm-2.353.465a1.9 1.9 0 002.353-.465l-1.385-1.15a.1.1 0 01-.124.025l-.844 1.59zm-3.296-1.662a.1.1 0 01.123-.024l.844-1.59a1.9 1.9 0 00-2.343.454l1.376 1.16z"
      ></path>
    </svg>
  );
}

export default TotalSalesIcon;
