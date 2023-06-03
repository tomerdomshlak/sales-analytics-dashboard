import React from "react";
import styled from "styled-components";
import VerticalFlex from "../components/flex_layouts/VerticalFlex";
import { H4 } from "../components/typography/H4";
import Gap8HorizontalFlex from "../components/flex_layouts/Gap8HorizontalFlex";
import { colors } from "../components/theme/colors";
import OrderItem from "./OrderItem";

const OrdersList = ({ ...props }) => {
  const items = [
    {
      imageSrc: "/theresa.png",
      backgroundColor: colors.blue_6,
      name: "Theresa Web",
      timeAgo: "2 Minutes Ago",
      amount: "$656.00",
    },
    {
      imageSrc: "/esther.png",
      backgroundColor: colors.yellow_1,
      name: "Esther Cooper",
      timeAgo: "2 Minutes Ago",
      amount: "$856.00",
    },
    {
      imageSrc: "/floyd.png",
      backgroundColor: colors.blue_3,
      name: "Floyd Web",
      timeAgo: "2 Minutes Ago",
      amount: "$756.00",
    },
    {
      imageSrc: "/bessie.png",
      backgroundColor: colors.blue_6,
      name: "Bessie Web",
      timeAgo: "2 Minutes Ago",
      amount: "$856.00",
    },
  ];

  return (
    <LayoutRoot {...props}>
      <TableHeader>
        <TableHeaderText>Order</TableHeaderText>
        <TableHeaderText>Amount</TableHeaderText>
      </TableHeader>
      <TableItems>
        {items.map(({ imageSrc, name, backgroundColor, timeAgo, amount }) => (
          <OrderItem
            imageSrc={imageSrc}
            backgroundColor={backgroundColor}
            timeAgo={timeAgo}
            name={name}
            amount={amount}
          />
        ))}
      </TableItems>
    </LayoutRoot>
  );
};

export default OrdersList;

const LayoutRoot = styled(VerticalFlex)`
  gap: 20px;
`;

const TableHeader = styled(Gap8HorizontalFlex)`
  justify-content: space-between;
`;

const TableHeaderText = styled(H4)`
  color: ${colors.blue_4};
`;

const TableItems = styled(VerticalFlex)`
  gap: 35px;
`;
