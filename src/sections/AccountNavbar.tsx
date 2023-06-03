import React from "react";
import styled from "styled-components";
import HorizontalFlex from "../components/flex_layouts/HorizontalFlex";
import { IconButton } from "@mui/material";
import { colors } from "../components/theme/colors";

const AccountNavbar = ({ ...props }) => {
  return (
    <LayoutRoot {...props}>
      <StyledIconButton>
        <img src="/alarm.svg" alt="Alarm" />
      </StyledIconButton>
      <AvatarIconButton>
        <img src="/my_avatar.png" alt="My Avatar" width={25} height={25} />
      </AvatarIconButton>
    </LayoutRoot>
  );
};

export default AccountNavbar;

const LayoutRoot = styled(HorizontalFlex)`
  gap: 20px;
  justify-self: end;
  align-self: end;
`;

const StyledIconButton = styled(IconButton)``;
const AvatarIconButton = styled(IconButton)`
  && {
    border: 1px solid ${colors.purple_1};
  }
`;
