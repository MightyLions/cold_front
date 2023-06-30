import { Card, styled } from "@mui/material";
import { PostCard } from "../components/post/PostCard";
import {PostRegisterInfo} from "../components/post/PostRegisterInfo";
import React from "react";
import {Navi} from "../components/organisms/Navi"

const CenterCard = styled(Card)(({ }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  width : "50%",
  margin : "5%"
  
}));

const StyledDiv = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  margin: auto;
  padding: 8px 16px;
  max-width: 1280px;
  column-gap: 64px;
`;

export const HomePage = () => {
  return (
    <StyledDiv>
      <Navi />
      <CenterCard>
        <PostRegisterInfo fc={"black"}></PostRegisterInfo>
        <PostCard></PostCard>
      </CenterCard>
    </StyledDiv>
  );
};
