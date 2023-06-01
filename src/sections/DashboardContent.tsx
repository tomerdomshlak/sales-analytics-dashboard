import React from "react";
import styled from "styled-components";
import Gap8VerticalFlex from "../components/flex_layouts/Gap8VerticalFlex";
import SearchBar1 from "../components/search/SearchBar1";

const DashboardContent = ({ ...props }) => {
  return (
    <LayoutRoot {...props}>
      <SearchBar1 />
    </LayoutRoot>
  );
};

export default DashboardContent;

const LayoutRoot = styled(Gap8VerticalFlex)`
  padding: 35px 40px;
`;
