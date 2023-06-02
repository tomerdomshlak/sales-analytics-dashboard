import React from "react";

type Props = {
  fill: string;
};

function MenuIcon({ fill }: Props) {
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
        d="M5.573 4.425a1.114 1.114 0 000 2.229h8.833a1.115 1.115 0 100-2.23H5.573zM4.462 10c0-.613.496-1.114 1.11-1.114h8.834a1.115 1.115 0 110 2.229H5.573c-.615 0-1.111-.5-1.111-1.115zM5.583 13.346a1.115 1.115 0 100 2.23h8.834a1.115 1.115 0 000-2.23H5.583z"
      ></path>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M0 3.333A3.333 3.333 0 013.333 0h13.334A3.333 3.333 0 0120 3.333v13.334A3.333 3.333 0 0116.667 20H3.333A3.333 3.333 0 010 16.667V3.333zm3.333-1.11h13.334a1.11 1.11 0 011.11 1.11v13.334a1.11 1.11 0 01-1.11 1.11H3.333a1.111 1.111 0 01-1.11-1.11V3.333a1.111 1.111 0 011.11-1.11z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default MenuIcon;
