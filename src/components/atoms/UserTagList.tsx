import React from 'react';
import { Grid, Button } from '@mui/material';
import { UserTag } from './UserTag';

export const UserTagList = () => {
  return (
    <Grid container spacing={2}>
      <UserTag value="AI" color="#caf0f8" />
      <UserTag value="SNS" color="#a0c4ff" />
      <UserTag value="Health" color="#fec89a" />
    </Grid>
  );
};

