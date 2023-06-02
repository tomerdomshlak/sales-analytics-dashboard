import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Gap16HorizontalFlex from "../flex_layouts/Gap16HorizontalFlex";
import { colors } from "../theme/colors";

type Props = {
  onClick?: Function;
  setHoverIndex?: Function;
  index: number;
  hoverIndex?: number;
  icon: any;
  text: string;
  isSelected?: boolean;
};

const MenuItem1 = ({
  icon,
  text,
  index,
  hoverIndex,
  setHoverIndex,
  isSelected,
  onClick,
  ...props
}: Props) => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const timerRef: { current: NodeJS.Timeout | null } = useRef(null);

  useEffect(() => {
    clearTimeout(timerRef.current as NodeJS.Timeout);

    if (text) {
      timerRef.current = setTimeout(() => setIsTextVisible(true), 300);
    } else {
      setIsTextVisible(false);
    }
  }, [text]);

  return (
    <LayoutRoot
      isSelected={isSelected}
      onClick={onClick}
      onMouseEnter={() => setHoverIndex?.(index)}
      onMouseLeave={() => setHoverIndex?.(null)}
      {...props}
    >
      <IconContainer>{icon}</IconContainer>
      {isTextVisible && (
        <Text isSelected={isSelected!} isHover={hoverIndex === index}>
          {text}
        </Text>
      )}
    </LayoutRoot>
  );
};

export default MenuItem1;

const LayoutRoot = styled(Gap16HorizontalFlex)`
  cursor: pointer;
  align-items: center;
  min-height: 48px;
  width: 100%;
  padding: 0 30px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: linear-gradient(
        90deg,
        #9267ff -1%,
        rgba(146, 103, 255, 0) 100%
      );
    `}
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.div<{ isSelected: boolean; isHover: boolean }>`
  word-break: break-all;
  color: ${({ isSelected, isHover }) =>
    isSelected || isHover ? colors.white : colors.blue_1};
`;
