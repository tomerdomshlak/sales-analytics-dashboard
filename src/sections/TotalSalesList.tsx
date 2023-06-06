import React from "react";
import styled from "styled-components";
import HorizontalFlex from "../components/flex_layouts/HorizontalFlex";
import TotalSalesIcon from "../svg2jsx/TotalSalesIcon";
import { colors } from "../components/theme/colors";
import TotalSalesItem from "./TotalSalesItem";

const TotalSalesList = ({ ...props }) => {
  const items = [
    {
      icon: <TotalSalesIcon fill={colors.yellow_1} />,
      value: "$15,205.00",
      increaseLevel: "+32.40",
      dotColor: colors.yellow_1,
    },
    {
      icon: <TotalSalesIcon fill={colors.blue_3} />,
      value: "$20,205.00",
      increaseLevel: "+32.40",
      dotColor: colors.blue_3,
    },
    {
      icon: <TotalSalesIcon fill={colors.purple_1} />,
      value: "$25,205.00",
      increaseLevel: "+32.40",
      dotColor: colors.purple_1,
    },
  ];
  return (
    <LayoutRoot {...props}>
      {items.map(({ icon, value, increaseLevel, dotColor }, index) => (
        <TotalSalesItem
          key={index}
          icon={icon}
          value={value}
          increaseLevel={increaseLevel}
          dotColor={dotColor}
        />
      ))}
    </LayoutRoot>
  );
};

export default TotalSalesList;

const LayoutRoot = styled(HorizontalFlex)`
  gap: 20px;
`;
