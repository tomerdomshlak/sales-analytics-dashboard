import React from "react";
import styled from "styled-components";
import HorizontalFlex from "../components/flex_layouts/HorizontalFlex";
import VerticalFlex from "../components/flex_layouts/VerticalFlex";
import { H4 } from "../components/typography/H4";
import { Tiny } from "../components/typography/Tiny";
import { colors } from "../components/theme/colors";

type Props = {
  imageSrc: string;
  backgroundColor: string;
  name: string;
  timeAgo: string;
  amount: string;
};

const OrderItem = ({
  imageSrc,
  backgroundColor,
  name,
  timeAgo,
  amount,
}: Props) => {
  return (
    <LayoutRoot>
      <Image
        backgroundColor={backgroundColor}
        src={imageSrc}
        alt="Profile Image"
      />
      <TextContainer>
        <VerticalFlex>
          <H4>{name}</H4>
          <TimeAgoText>{timeAgo}</TimeAgoText>
        </VerticalFlex>

        <H4>{amount}</H4>
      </TextContainer>
    </LayoutRoot>
  );
};

export default OrderItem;

const LayoutRoot = styled(HorizontalFlex)`
  gap: 24px;
`;

const Image = styled.img<{ backgroundColor: string }>`
  width: 40px;
  height: 40px;
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
`;

const TextContainer = styled(HorizontalFlex)`
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const TimeAgoText = styled(Tiny)`
  color: ${colors.blue_4};
`;
