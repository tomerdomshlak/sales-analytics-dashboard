import React, { useState } from "react";
import styled from "styled-components";
import Gap8VerticalFlex from "../components/flex_layouts/Gap8VerticalFlex";
import { IconButton } from "@mui/material";
import MenuItem1 from "../components/buttons/MenuItem1";
import Gap16VerticalFlex from "../components/flex_layouts/Gap16VerticalFlex";
import { items } from "./SideMenu.data";

const SideMenu = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <LayoutRoot isOpen={isOpen} {...props}>
      <MainContainer isOpen={isOpen}>
        <StyledIconButton onClick={handleHamburgerClick}>
          <img src="/hamburger.svg" alt="Menu Hamburger" />
        </StyledIconButton>
        <MenuItemsContainer>
          {items.map((item, index) => (
            <MenuItem1
              key={item.text}
              text={isOpen ? item.text : ""}
              isSelected={selectedIndex === index}
              iconSrc={item.iconSrc}
              onClick={() => handleMenuItemClick(index)}
            />
          ))}
        </MenuItemsContainer>
      </MainContainer>
    </LayoutRoot>
  );
};

export default SideMenu;

const LayoutRoot = styled(Gap8VerticalFlex)`
  width: ${({ isOpen }) => (isOpen ? 270 : 80)}px;
  padding-top: 40px;
  transition: width 1s ease;
  overflow: hidden;
  background: linear-gradient(
    92.44deg,
    rgb(11, 30, 81, 0.4) -3.59%,
    rgb(21, 46, 95, 0.4) 108.46%
  );
  border-radius: 19px;
`;

const MainContainer = styled(Gap16VerticalFlex)`
  gap: 32px;
  align-items: start;
`;

const StyledIconButton = styled(IconButton)`
  width: fit-content;
  margin-left: 22px !important;
`;

const MenuItemsContainer = styled(Gap16VerticalFlex)``;
