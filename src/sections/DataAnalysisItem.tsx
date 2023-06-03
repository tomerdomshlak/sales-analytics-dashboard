import React from "react";
import styled from "styled-components";
import VerticalFlex from "../components/flex_layouts/VerticalFlex";
import { colors } from "../components/theme/colors";
import { H4 } from "../components/typography/H4";
import { H6 } from "../components/typography/H6";

type Props = {
  barHeight: number;
  amount: number;
  type: string;
};
const DataAnalysisItem = ({ barHeight, amount, type }: Props) => {
  return (
    <LayoutRoot>
      <Bar height={barHeight} />
      <TextContainer>
        <H4>{amount}</H4>
        <TypeText>{type}</TypeText>
      </TextContainer>
    </LayoutRoot>
  );
};

export default DataAnalysisItem;

const LayoutRoot = styled(VerticalFlex)`
  gap: 24px;
  align-items: center;
`;

const TextContainer = styled(VerticalFlex)`
  align-items: center;
`;

const Bar = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;
  width: 28px;
  background: ${colors.gradient_2};
  border-radius: 20px;
`;

const TypeText = styled(H6)`
  color: ${colors.blue_4};
`;
