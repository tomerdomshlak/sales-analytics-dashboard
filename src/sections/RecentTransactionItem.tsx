import React from "react";
import styled from "styled-components";
import Gap8HorizontalFlex from "../components/flex_layouts/Gap8HorizontalFlex";
import HorizontalFlex from "../components/flex_layouts/HorizontalFlex";
import VerticalFlex from "../components/flex_layouts/VerticalFlex";
import { H3 } from "../components/typography/H3";
import { Tiny } from "../components/typography/Tiny";
import { colors } from "../components/theme/colors";

type Props = {
  iconSrc: string;
  companyName: string;
  country: string;
  date: string;
  amount: string;
};

const RecentTransactionItem = ({
  iconSrc,
  companyName,
  country,
  date,
  amount,
}: Props) => {
  return (
    <LayoutRoot>
      <CompanyNameContainer>
        <img src={iconSrc} alt={iconSrc} />
        <VerticalFlex>
          <H3>{companyName}</H3>
          <CountryText>{country}</CountryText>
        </VerticalFlex>
      </CompanyNameContainer>
      <DateText>{date}</DateText>
      <H3>{amount}</H3>
    </LayoutRoot>
  );
};

export default RecentTransactionItem;

const LayoutRoot = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: end;
`;

const CompanyNameContainer = styled(HorizontalFlex)`
  justify-self: start;
  gap: 20px;
`;

const CountryText = styled(Tiny)`
  color: ${colors.blue_4};
`;
const DateText = styled(H3)`
  justify-self: center;
  color: ${colors.blue_5};
`;
