import React from "react";
import styled from "styled-components";
import Gap16HorizontalFlex from "../flex_layouts/Gap16HorizontalFlex";

const SearchBar1 = ({ ...props }) => {
  return (
    <LayoutRoot {...props}>
      <img src="/glass.svg" alt="Glass" />
      <Field placeholder="Search"></Field>
    </LayoutRoot>
  );
};

export default SearchBar1;

const LayoutRoot = styled(Gap16HorizontalFlex)`
  padding: 15px 21px;
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
