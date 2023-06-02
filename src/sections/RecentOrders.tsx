import React from "react";
import styled from "styled-components";
import Gap8VerticalFlex from "../components/flex_layouts/Gap8VerticalFlex";

const RecentOrders = ({ ...props }) => {
  return <LayoutRoot {...props}>RecentOrders</LayoutRoot>;
};

export default RecentOrders;

const LayoutRoot = styled(Gap8VerticalFlex)``;
