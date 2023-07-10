import React from 'react';
import { Grid, Button } from '@mui/material';

interface UserTagProps {
  value: string;
  color: string;
}

export const UserTag: React.FC<UserTagProps> = ({ value, color }) => {
  return (
    <Grid item>
      <Button variant="contained" style={{ backgroundColor: color, color: '#000' }}>
        #{value}
      </Button>
    </Grid>
  );
};