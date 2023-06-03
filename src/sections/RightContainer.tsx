import React from "react";
import styled from "styled-components";
import RecentOrders from "./RecentOrders";
import AccountNavbar from "./AccountNavbar";
import { colors } from "../components/theme/colors";
import VerticalFlex from "../components/flex_layouts/VerticalFlex";
import DataAnalysis from "./DataAnalysis";

const RightContainer = ({ ...props }) => {
  return (
    <LayoutRoot {...props}>
      <TopContainer>
        <AccountNavbar />
        <RecentOrders />
      </TopContainer>
      <BottomContainer>
        <DataAnalysis />
      </BottomContainer>
    </LayoutRoot>
  );
};

export default RightContainer;

const LayoutRoot = styled(VerticalFlex)`
  width: 100%;
  gap: 24px;
`;

const BaseContainer = styled(VerticalFlex)`
  background: ${colors.gradient_1};
  border-radius: 19px;
`;

const TopContainer = styled(BaseContainer)`
  gap: 20px;
  padding: 77px 20px;
`;

const BottomContainer = styled(BaseContainer)`
  padding: 20px;
  gap: 3px;
`;
