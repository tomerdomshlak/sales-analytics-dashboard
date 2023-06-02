import React, { useState } from "react";
import styled from "styled-components";
import Gap8VerticalFlex from "../components/flex_layouts/Gap8VerticalFlex";
import { IconButton } from "@mui/material";
import MenuItem1 from "../components/buttons/MenuItem1";
import Gap16VerticalFlex from "../components/flex_layouts/Gap16VerticalFlex";
import DashboardIcon from "../svg2jsx/DashboardIcon";
import HomeIcon from "../svg2jsx/HomeIcon";
import ReportsIcon from "../svg2jsx/ReportsIcon";
import OrdersIcon from "../svg2jsx/OrdersIcon";
import MenuIcon from "../svg2jsx/MenuIcon";
import CustomersIcon from "../svg2jsx/CustomersIcon";
import SettingsIcon from "../svg2jsx/SettingsIcon";
import { colors } from "../components/theme/colors";
import VerticalFlex from "../components/flex_layouts/VerticalFlex";

const SideMenu = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | undefined>();

  const getMenuItemColor = (index: number) => {
    return selectedIndex === index || hoverIndex === index
      ? colors.white
      : colors.blue_1;
  };

  const items = [
    {
      icon: <DashboardIcon fill={getMenuItemColor(0)} />,
      text: "Dashboard",
    },
    {
      icon: <HomeIcon fill={getMenuItemColor(1)} />,
      text: "Home",
    },
    {
      icon: <ReportsIcon fill={getMenuItemColor(2)} />,
      text: "Reports",
    },
    {
      icon: <OrdersIcon fill={getMenuItemColor(3)} />,
      text: "Orders",
    },
    {
      icon: <MenuIcon fill={getMenuItemColor(4)} />,
      text: "Menu",
    },
    {
      icon: <CustomersIcon fill={getMenuItemColor(5)} />,
      text: "Customers",
    },
    {
      icon: <SettingsIcon fill={getMenuItemColor(6)} />,
      text: "Settings",
    },
  ];

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
              index={index}
              text={isOpen ? item.text : ""}
              isSelected={selectedIndex === index}
              hoverIndex={hoverIndex}
              setHoverIndex={setHoverIndex}
              icon={item.icon}
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

const MenuItemsContainer = styled(VerticalFlex)``;
