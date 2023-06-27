import {Avatar, Card, CardHeader, IconButton, Typography, styled} from "@mui/material";
import {red} from "@mui/material/colors";
import React from "react";


const TransparentCard = styled(Card)(({}) => ({
  backgroundColor: '#F5F5F5',
  boxShadow: 'none',
}));


export const PostRegisterInfoInDetail = ({fc}) => {
  return (  
      <TransparentCard>
        <CardHeader
          avatar={
          <Avatar sx={{ bgcolor: red[500]}} aria-label="recipe">
            R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
            </IconButton>
          }
          title = {
          <Typography variant="h6" style={{color:fc}}>
            MightLions
          </Typography>}          
          subheader = {
          <span style={{color: fc}}>
            @기업설명 / {"{기업 태그}"}
          </span>}
        />
      </TransparentCard>
  );
}
