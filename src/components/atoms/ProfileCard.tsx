import React from 'react';
import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { UserTagList } from './UserTagList';

interface User {
  name: string;
  age: number;
  email: string;
  profilePic: string;
}

interface ProfileCardProps {
  user: User;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/edit');
  };

  return (
    <Box bgcolor="white" borderRadius={10} padding="5%">
      <Grid container alignItems="center">
        <Grid item xs={11}>
          <Typography variant="h5" gutterBottom>
            {user.name}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton aria-label="Modify" onClick={handleEditClick}>
            <EditIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            프로필 사진
          </Typography>
          <Avatar
            sx={{
              width: '85%',
              maxWidth: '250px',
              height: 'auto',
              maxHeight: '250px',
            }}
            alt="Profile Picture"
            src={user.profilePic}
          />
      </Grid>

      <Grid container>
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            나이
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {user.age}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            이메일
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {user.email}
          </Typography>
          
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            회사 키워드
          </Typography>
          <UserTagList />
        </Box>
      </Grid>
    </Box>
  );
};

export default ProfileCard;
