import React from "react";
import styled from "styled-components";
import { H2 } from "../components/typography/H2";
import Gap16VerticalFlex from "../components/flex_layouts/Gap16VerticalFlex";
import OrdersList from "./OrdersList";

const RecentOrders = ({ ...props }) => {
  return (
    <LayoutRoot {...props}>
      <H2>Recent Orders</H2>
      <OrdersList />
    </LayoutRoot>
  );
};

export default RecentOrders;

const LayoutRoot = styled(Gap16VerticalFlex)``;
