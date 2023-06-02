import React from "react";
import styled from "styled-components";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const DashboardContent = ({ ...props }) => {
  return (
    <LayoutRoot {...props}>
      <LeftContainer />
      <RightContainer />
    </LayoutRoot>
  );
};

export default DashboardContent;

const LayoutRoot = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 32px;
  padding: 35px 40px;
`;
