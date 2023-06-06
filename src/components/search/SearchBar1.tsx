import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import Gap8HorizontalFlex from "../flex_layouts/Gap8HorizontalFlex";
import { useAppContext } from "../../AppContext";

const SearchBar1 = ({ ...props }) => {
  const { showGeneralSnackbarMessage } = useAppContext();

  return (
    <LayoutRoot {...props}>
      <StyledIconButton onClick={() => showGeneralSnackbarMessage?.()}>
        <img src="/glass.svg" alt="Glass" />
      </StyledIconButton>
      <Field placeholder="Search"></Field>
    </LayoutRoot>
  );
};

export default SearchBar1;

const LayoutRoot = styled(Gap8HorizontalFlex)`
  padding: 4px 10px;
  max-width: 270px;
  background: linear-gradient(134.81deg, #152e5f -14.32%, #0b1e51 90.64%);
  border-radius: 29px;
`;

const Field = styled.input`
  border: none;
  border-bottom: 0;
  background: transparent;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  outline: none;

  ::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #667cb1;
  }
`;

const StyledIconButton = styled(IconButton)`
  && {
    padding: 11px;
  }
`;
