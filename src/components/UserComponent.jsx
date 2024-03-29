import { Avatar, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const UserComponent = ({ profile, username }) => {
  return (
    <UCWrapper>
      <Avatar src={profile} />
      <Typography variant="p">{username}</Typography>
    </UCWrapper>
  );
};

const UCWrapper = styled.aside`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 10px;
  padding: 9px;
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkgray};
  }
`;

export default UserComponent;
