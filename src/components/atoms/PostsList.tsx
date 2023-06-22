import React from 'react';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import MyPagePostCard from './MyPagePostCard';

interface Post {
  id: number;
  author: {
    name: string;
    logo: string;
  };
  title: string;
  content: string;
  views: number;
  likes: number;
  dislikes: number;
}

const OuterGrid = styled(Grid)`
  background-color: white;
  align-items: center;
  justify-content: center;
  //border-radius: 25px;
  //border: 1px gray solid;
  padding: 2%;
`;

interface PostsListProps {
  userPosts: Post[];
}

const PostsList: React.FC<PostsListProps> = ({ userPosts }) => {
  return (
    <OuterGrid>
      {userPosts.map((post) => (
        <MyPagePostCard key={post.id} post={post} />
      ))}
    </OuterGrid>
  );
};

export default PostsList;
