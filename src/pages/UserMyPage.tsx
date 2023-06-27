import React, { useState } from 'react';
import ProfileCard from '../components/atoms/ProfileCard';
import PostsList from '../components/atoms/PostsList';

import { Divider, Grid, Tab, Tabs } from '@mui/material';
import styled from 'styled-components';

const StyledGrid = styled(Grid)`
  //background: #18e3fa;
  border-radius: 5px;
  padding: 32px;
  margin: 10px;
  align-content: center;
  justify-self: center;
`;
const PostListGrid = styled(Grid)`
  background: white;
  border-radius: 10px;
  //border: 1px gray solid;
  align-content: center;
  justify-self: center;
`;

const ContainerGrid = styled(Grid)(() => ({
  backgroundColor: '#F4F4F4',
  borderRadius: '15px',
  padding: '1%',
  margin: '1%',
}));

export const UserMyPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (
    _event: any,
    newValue: React.SetStateAction<number>
  ) => {
    setActiveTab(newValue);
  };

  const user = {
    name: 'John Doe',
    age: 25,
    email: 'johndoe@example.com',
    profilePic:
      'https://via.placeholder.com/500x500/f8edeb/000000.png?text=placeholder', // URL of the profile picture
  };

  const userPosts1 = [
    {
      id: 1,
      author: {
        name: 'John Doe',
        logo: 'https://via.placeholder.com/500x500/f8edeb/000000.png?text=placeholder',
      },
      title: 'Post 1',
      content: 'This is the content of Post 1.',
      views: 200,
      likes: 10,
      dislikes: 5,
    },
    {
      id: 2,
      author: {
        name: 'John Doe',
        logo: 'https://via.placeholder.com/500x500/f8edeb/000000.png?text=placeholder',
      },
      title: 'Post 2',
      content: 'This is the content of Post 1.',
      views: 200,
      likes: 10,
      dislikes: 5,
    },
    {
      id: 3,
      author: {
        name: 'John Doe',
        logo: 'https://via.placeholder.com/500x500/f8edeb/000000.png?text=placeholder',
      },
      title: 'Post 3',
      content: 'This is the content of Post 1.',
      views: 200,
      likes: 10,
      dislikes: 5,
    },
  ];
  const userPosts2 = [
    {
      id: 2,
      author: {
        name: 'John Doe',
        logo: 'path/to/logo.png',
      },
      title: 'Post 1',
      content: 'This is the content of Post 1.',
      views: 200,
      likes: 10,
      dislikes: 5,
    },
    {
      id: 3,
      author: {
        name: 'John Doe',
        logo: 'path/to/logo.png',
      },
      title: 'Post 1',
      content: 'This is the content of Post 1.',
      views: 200,
      likes: 10,
      dislikes: 5,
    },
    {
      id: 4,
      author: {
        name: 'John Doe',
        logo: 'path/to/logo.png',
      },
      title: 'Post 1',
      content: 'This is the content of Post 1.',
      views: 200,
      likes: 10,
      dislikes: 5,
    },
  ];

  return (
    <Grid container xs={12} sm={12} md={12} lg={12}>
      <ContainerGrid container xs={12} sm={12} md={12} lg={12}>
        {/*<Grid item xs={12} sm={12} md={12} lg={12}>*/}
        {/*  <Typography variant="h4" gutterBottom>*/}
        {/*    My Page*/}
        {/*  </Typography>*/}
        {/*</Grid>*/}

        <StyledGrid item xs={12} sm={12} md={5} lg={5}>
          <ProfileCard user={user} />
        </StyledGrid>
        <StyledGrid item xs={12} sm={12} md={7} lg={7}>
          <PostListGrid>
            <Tabs value={activeTab} onChange={handleTabChange}>
              <Tab label="작성 글 조회" />
              <Tab label="추천 게시글" />
              <Tab label="좋아요 누른 게시글" />
              <Tab label="작성 댓글" />
            </Tabs><Divider />
            {activeTab === 0 && <PostsList userPosts={userPosts1} />}
            {activeTab === 1 && <PostsList userPosts={userPosts2} />}
            {activeTab === 2 && <PostsList userPosts={userPosts1} />}
            {activeTab === 3 && <PostsList userPosts={userPosts2} />}
          </PostListGrid>

        </StyledGrid>
      </ContainerGrid>
    </Grid>
  );
};

export default UserMyPage;
