import React from "react";
import styled from "styled-components";
import VerticalFlex from "../components/flex_layouts/VerticalFlex";
import { colors } from "../components/theme/colors";
import { H2 } from "../components/typography/H2";
import Gap8VerticalFlex from "../components/flex_layouts/Gap8VerticalFlex";
import { H5 } from "../components/typography/H5";
import HorizontalFlex from "../components/flex_layouts/HorizontalFlex";
import { IconButton } from "@mui/material";
import Gap16HorizontalFlex from "../components/flex_layouts/Gap16HorizontalFlex";

type Props = {
  icon: any;
  value: string;
  increaseLevel: string;
  dotColor: string;
};

const TotalSalesItem = ({ icon, value, increaseLevel, dotColor }: Props) => {
  return (
    <LayoutRoot>
      <Header>
        {icon}
        <IconButton>
          <img src="/arrow-right.svg" alt="Arrow Right" />
        </IconButton>
      </Header>
      <Footer>
        <VerticalFlex>
          <H2>{value}</H2>
          <TotalSalesText>Total Sales</TotalSalesText>
        </VerticalFlex>
        <IncreaseLevelContainer>
          <Dot color={dotColor} />
          <H5>{increaseLevel}</H5>
        </IncreaseLevelContainer>
      </Footer>
    </LayoutRoot>
  );
};

export default TotalSalesItem;

const LayoutRoot = styled(Gap8VerticalFlex)`
  min-width: 185px;
  background: ${colors.gradient_1};
  border-radius: 19px;
  padding: 20px;
`;

const Header = styled(Gap16HorizontalFlex)`
  justify-content: space-between;
  align-items: center;
`;

const TotalSalesText = styled(H5)`
  color: ${colors.blue_1};
`;

const Footer = styled(Gap16HorizontalFlex)`
  justify-content: space-between;
  align-items: end;
`;

const IncreaseLevelContainer = styled(HorizontalFlex)`
  gap: 2px;
  align-items: center;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background: ${({ color }) => color};
`;
