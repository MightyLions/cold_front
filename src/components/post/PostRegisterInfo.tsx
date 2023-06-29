import {Avatar, Card, CardHeader, IconButton, Typography, styled} from "@mui/material";
import {red} from "@mui/material/colors";
import React from "react";


const TransparentCard = styled(Card)(({}) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));


export const PostRegisterInfo = ({fc}) => {
  return (  
      <TransparentCard>
        <CardHeader
          avatar={
          <Avatar sx={{ bgcolor: red[500]}} aria-label="recipe">
            R
            </Avatar>
          }
          title = {
          <Typography variant="h6" style={{color:fc}}>
            {'{작성자} 이름이 {카테고리}를 공유했어요.'}
          </Typography>}          
          subheader = {
          <span style={{color: fc}}>
            {"@{기업 이름} / 약 {한 시간 전}"}
          </span>}
        />
      </TransparentCard>
  );
}
