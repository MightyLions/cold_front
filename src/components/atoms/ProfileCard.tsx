import React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { Box, Button, IconButton } from '@mui/material';
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

interface ProfileCardProps {
  user: {
    name: string;
    age: number;
    email: string;
    profilePic: string;
  };
}

const userTags = [
  {
    name: 'AI',
    color: 'caf0f8',
  },
  {
    name: 'SNS',
    color: 'a0c4ff',
  },
  {
    name: 'Health',
    color: 'fec89a',
  },
];

const StyledGrid = styled(Grid)`
  //background: #ffdbdb;
  color: #000000;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

const StyledContentsGrid = styled(Grid)`
  color: #000000;
  padding: 16px;
`;

const OuterGrid = styled(Grid)`
  background-color: white;
  border-radius: 10px;
  //border: 1px gray solid;
  padding: 5%;
`;

const UserTagButton = ({ name, color }) => {
  return (
    <Grid item>
      <Button
        variant="contained"
        style={{ backgroundColor: `#${color}`, color: '#000' }}>
        #{name}
      </Button>
    </Grid>
  );
};
const UserTagList = ({ tags }) => {
  return (
    <Grid container spacing={2}>
      {tags.map((tag, index) => (
        <UserTagButton key={index} name={tag.name} color={tag.color} />
      ))}
    </Grid>
  );
};

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
        <Grid item xs={12}></Grid>
        <Typography variant="h5" gutterBottom>
          {user.name}
        </Typography>
      </StyledGrid>

      <StyledContentsGrid container>
        <Box>
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
            <UserTagList tags={userTags} />
          </Typography>
        </Box>
      </StyledContentsGrid>
    </OuterGrid>
  );
};
export default ProfileCard;
