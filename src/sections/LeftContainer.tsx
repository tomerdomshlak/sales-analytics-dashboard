import React from "react";
import styled from "styled-components";
import SearchBar1 from "../components/search/SearchBar1";
import TitleContainer from "./TitleContainer";
import TotalSalesList from "./TotalSalesList";
import VerticalFlex from "../components/flex_layouts/VerticalFlex";
import SalesReport from "./SalesReport";
import RecentTransactions from "./RecentTransactions";

const LeftContainer = ({ ...props }) => {
  return (
    <LayoutRoot {...props}>
      <SearchBar1 />
      <TitleContainer />
      <TotalSalesList />
      <SalesReport />
      <RecentTransactions />
    </LayoutRoot>
  );
};

export default LeftContainer;

const LayoutRoot = styled(VerticalFlex)`
  gap: 20px;
  width: fit-content;
  max-width: 717px;
`;
