import React from "react";
import styled from "styled-components";
import VerticalFlex from "../components/flex_layouts/VerticalFlex";
import { H2 } from "../components/typography/H2";
import { inspect } from "util";
import { colors } from "../components/theme/colors";
import Gap8VerticalFlex from "../components/flex_layouts/Gap8VerticalFlex";
import Gap8HorizontalFlex from "../components/flex_layouts/Gap8HorizontalFlex";
import { H4 } from "../components/typography/H4";
import RecentTransactionItem from "./RecentTransactionItem";

const RecentTransactions = ({ ...props }) => {
  const items = [
    {
      iconSrc: "/sikago-sons.svg",
      companyName: "Sikago & Sons",
      country: "UK",
      date: "10 Jan 2021",
      amount: "$432.25",
    },
    {
      iconSrc: "/fast-tracks.svg",
      companyName: "Fast Tracks",
      country: "USA",
      date: "5 Oct 2021",
      amount: "$563.25",
    },
    {
      iconSrc: "/fanish-company.svg",
      companyName: "Fanish & Company",
      country: "India",
      date: "15 Oct 2021",
      amount: "$256.25",
    },
  ];
  return (
    <LayoutRoot {...props}>
      <MainContainer>
        <H2>Recent Transactions</H2>
        <TableContainer>
          <TableHeader>
            <CompanyNameText>Company name</CompanyNameText>
            <DateText>Date</DateText>
            <H4>Amount</H4>
          </TableHeader>
          <TableItems>
            {items.map((item) => (
              <RecentTransactionItem
                iconSrc={item.iconSrc}
                companyName={item.companyName}
                country={item.country}
                date={item.date}
                amount={item.amount}
              />
            ))}
          </TableItems>
        </TableContainer>
      </MainContainer>
    </LayoutRoot>
  );
};

export default RecentTransactions;

const LayoutRoot = styled.div`
  background: ${colors.gradient_1};
  width: 100%;
  max-width: 100%;
  border-radius: 19px;
`;

const MainContainer = styled(Gap8VerticalFlex)`
  margin: 16px 20px;
`;

const TableContainer = styled(VerticalFlex)`
  gap: 24px;
`;

const TableHeader = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: end;

  > * {
    color: ${colors.blue_4};
  }
`;

const CompanyNameText = styled(H4)`
  justify-self: start;
`;
const DateText = styled(H4)`
  justify-self: center;
`;

const TableItems = styled(VerticalFlex)`
  gap: 20px;
`;
