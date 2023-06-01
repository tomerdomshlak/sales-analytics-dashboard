import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import Gap16HorizontalFlex from "../flex_layouts/Gap16HorizontalFlex";

type Props = {
  onClick?: Function;
  iconSrc: string;
  text: string;
  isSelected?: boolean;
};

const MenuItem1 = ({ iconSrc, text, isSelected, onClick, ...props }: Props) => {
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
    <LayoutRoot isSelected={isSelected} onClick={onClick} {...props}>
      <Image src={iconSrc} alt={text} />
      {isTextVisible && <Text>{text}</Text>}
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

const Image = styled.img`
  && > path {
    stroke: red;
  }
`;

const Text = styled.div`
  word-break: break-all;
`;
