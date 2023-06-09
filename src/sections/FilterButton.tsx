import React from "react";
import styled from "styled-components";
import HorizontalFlex from "../components/flex_layouts/HorizontalFlex";
import { H4 } from "../components/typography/H4";
import { colors } from "../components/theme/colors";
import { useAppContext } from "../AppContext";

const FilterButton = ({ ...props }) => {
  const { showGeneralSnackbarMessage } = useAppContext();

  const handleClick = () => {
    showGeneralSnackbarMessage?.();
  };

  return (
    <LayoutRoot onClick={handleClick} {...props}>
      <StyledH3>Filter</StyledH3>
      <img src="/filter.svg" alt="Filter" />
    </LayoutRoot>
  );
};

export default FilterButton;

const LayoutRoot = styled(HorizontalFlex)`
  cursor: pointer;
  border: 1.5px solid #18346d;
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
  gap: 44px;
  padding: 12px 36px 12px 20px;
  height: fit-content;

  :hover {
    border: 1.5px solid white;
  }
  :hover > * {
    color: white;
  }
`;

const StyledH3 = styled(H4)`
  color: ${colors.blue_2};
`;
