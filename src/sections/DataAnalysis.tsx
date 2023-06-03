import React from "react";
import styled from "styled-components";
import VerticalFlex from "../components/flex_layouts/VerticalFlex";
import Gap8VerticalFlex from "../components/flex_layouts/Gap8VerticalFlex";
import { H4 } from "../components/typography/H4";
import { colors } from "../components/theme/colors";
import Gap8HorizontalFlex from "../components/flex_layouts/Gap8HorizontalFlex";
import { IconButton } from "@mui/material";
import HorizontalFlex from "../components/flex_layouts/HorizontalFlex";
import DataAnalysisItem from "./DataAnalysisItem";

const DataAnalysis = ({ ...props }) => {
  const items = [
    {
      barHeight: 163,
      amount: 150,
      type: "Back Account",
    },
    {
      barHeight: 203,
      amount: 350,
      type: "Paypal Direct",
    },
    {
      barHeight: 153,
      amount: 2510,
      type: "Credit Card",
    },
  ];

  return (
    <LayoutRoot {...props}>
      <Header>
        <TitleContainer>
          <H4>Data Analysis</H4>
          <LastWeekText>Last Week</LastWeekText>
        </TitleContainer>
        <FalafelIconButton>
          <img src="/falafel.svg" alt="Falafel Menu" />
        </FalafelIconButton>
      </Header>
      <Items>
        {items.map(({ barHeight, amount, type }) => (
          <DataAnalysisItem barHeight={barHeight} amount={amount} type={type} />
        ))}
      </Items>
    </LayoutRoot>
  );
};

export default DataAnalysis;

const LayoutRoot = styled(Gap8VerticalFlex)``;

const Header = styled(Gap8HorizontalFlex)`
  justify-content: space-between;
  align-items: center;
`;

const TitleContainer = styled(VerticalFlex)`
  gap: 4px;
`;

const LastWeekText = styled(H4)`
  color: ${colors.blue_4};
`;

const FalafelIconButton = styled(IconButton)`
  && {
    width: 32px;
    height: 32px;
  }
`;

const Items = styled(HorizontalFlex)`
  gap: 24px;
  justify-content: space-between;
  align-items: flex-end;
`;
