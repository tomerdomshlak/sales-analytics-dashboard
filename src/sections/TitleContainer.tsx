import React from "react";
import styled from "styled-components";
import HorizontalFlex from "../components/flex_layouts/HorizontalFlex";
import VerticalFlex from "../components/flex_layouts/VerticalFlex";
import { H1 } from "../components/typography/H1";
import { H4 } from "../components/typography/H4";
import FilterButton from "./FilterButton";

const TitleContainer = ({ ...props }) => {
  return (
    <LayoutRoot {...props}>
      <MainContainer>
        <H1>Hello, Awlad</H1>
        <H4>Welcome back!</H4>
      </MainContainer>
      <FilterButton />
    </LayoutRoot>
  );
};

export default TitleContainer;

const LayoutRoot = styled(HorizontalFlex)`
  justify-content: space-between;
`;

const MainContainer = styled(VerticalFlex)`
  gap: 4px;
`;
