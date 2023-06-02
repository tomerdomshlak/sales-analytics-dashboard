import React from "react";
import styled from "styled-components";
import Gap8VerticalFlex from "../components/flex_layouts/Gap8VerticalFlex";

const RightContainer = ({ ...props }) => {
  return <LayoutRoot {...props}>Hi</LayoutRoot>;
};

export default RightContainer;

const LayoutRoot = styled(Gap8VerticalFlex)`
  width: 100%;
`;
