import React from "react";
import styled from "styled-components";
import { H1 } from "./H1";
import { H2 } from "./H2";
import { Tiny } from "./Tiny";
import { H5 } from "./H5";
import { H4 } from "./H4";

const TypographyDisplay = ({ ...props }) => {
  return (
    <LayoutRoot {...props}>
      <H1>H1</H1>
      <H2>H2</H2>
      <H4>H4</H4>
      <H5>H5</H5>
      <Tiny>Tiny</Tiny>
    </LayoutRoot>
  );
};

export default TypographyDisplay;

const LayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  background: black;
  height: fit-content;
`;
