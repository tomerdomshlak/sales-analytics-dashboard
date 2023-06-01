import React from "react";
import styled from "styled-components";
import { H1 } from "./H1";
import { H2 } from "./H2";

const TypographyDisplay = ({ ...props }) => {
  return (
    <LayoutRoot {...props}>
      <H1>H1</H1>
      <H2>H2</H2>
    </LayoutRoot>
  );
};

export default TypographyDisplay;

const LayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
`;
