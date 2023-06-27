import React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { Box, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

interface ProfileCardProps {
  user: {
    name: string;
    age: number;
    email: string;
    profilePic: string;
  };
}

const StyledGrid = styled(Grid)`
  //background: #ffdbdb;
  color: #000000;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

const OuterGrid = styled(Grid)`
  background-color: white;
  border-radius: 10px;
  //border: 1px gray solid;
  padding: 5%;
`;

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/edit');
  };

  return (
    <OuterGrid>
      <StyledGrid container>
        <Grid item xs={11}></Grid>
        <Grid item xs={1}>
          <IconButton aria-label={'Modify'} onClick={handleEditClick}>
            <EditIcon />
          </IconButton>
        </Grid>
      </StyledGrid>
      <StyledGrid container>
        <Avatar
          sx={{
            width: '85%', // 작은 화면에서는 100% 너비로 설정
            maxWidth: '250px', // 큰 화면에서는 최대 200px 크기로 설정
            height: '85%', // 높이는 자동으로 조정
            maxHeight: '250px',
          }}
          alt="Profile Picture"
          src={user.profilePic}
        />
      </StyledGrid>

      <StyledGrid container>
        <Box>
          <Typography variant="h5" gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            소개
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {user.age}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            회사 키워드
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {user.age}
          </Typography>
        </Box>
      </StyledGrid>
    </OuterGrid>
  );
};
export default ProfileCard;
