import React from "react";
import styled from "styled-components";
import { colors } from "../components/theme/colors";
import SideMenu from "./SideMenu";
import DashboardContent from "./DashboardContent";

const Dashboard = ({ ...props }) => {
  return (
    <LayoutRoot {...props}>
      <SideMenu />
      <DashboardContent />
    </LayoutRoot>
  );
};

export default Dashboard;

const LayoutRoot = styled.div`
  background: ${colors.background_1};
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
`;
