import React from "react";
import styled from "styled-components";
import VerticalFlex from "../components/flex_layouts/VerticalFlex";
import { H2 } from "../components/typography/H2";
import { colors } from "../components/theme/colors";

const SalesReport = ({ ...props }) => {
  return (
    <LayoutRoot {...props}>
      <MainContainer>
        <H2>Sales Report</H2>
        <GraphImage src="/graph.png" alt="Graph" />
      </MainContainer>
    </LayoutRoot>
  );
};

export default SalesReport;

const LayoutRoot = styled.div`
  background: ${colors.gradient_1};
  width: 100%;
  max-width: 100%;
  border-radius: 19px;
`;

const MainContainer = styled(VerticalFlex)`
  margin: 16px;
`;

const GraphImage = styled.img`
  width: 100%;
  max-width: 100%;
`;
