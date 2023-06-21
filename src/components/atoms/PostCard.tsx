import { Avatar, CardActions, Grid, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';

import { RemoveRedEye, ThumbDown, ThumbUp } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

interface PostListProps {
  post: {
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
  };
}

const OuterGrid = styled(Grid)`
  //background: #ffdbdb;
  padding: 2%;
  align-items: center;
  justify-content: center;
`;

const CardGrid = styled(Grid)`
  background: #ececec;
  color: #000000;
  padding: 2%;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  //border: 1px gray solid;
`;

const AuthorTitleGrid = styled(Grid)`
  height: 75%;
  background: #ffffff;
  border-radius: 15px;
  //border: 1px gray solid;
  color: #000000;
  padding: 1%;
  justify-content: center;
  text-align: center;
  align-items: center;
  vertical-align: middle;
`;

const PostCard: React.FC<PostListProps> = ({ post }) => {
  return (
    <OuterGrid container>
      <CardGrid container>
        <Grid item xs={7} sm={7} md={8} lg={9}>
          <Typography variant="h6" gutterBottom>
            {post.title}
          </Typography>
        </Grid>
        <AuthorTitleGrid container xs={5} sm={5} md={4} lg={3}>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Avatar
              sx={{
                width: '50%', // 작은 화면에서는 100% 너비로 설정
                height: '50%', // 높이는 자동으로 조정
              }}
              alt="Author Logo"
              src={post.author.logo}
            />
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <Typography variant="body1" style={{ textAlign: 'left' }}>
              {post.author.name}
            </Typography>
          </Grid>
        </AuthorTitleGrid>

        <Grid item xs={12}>
          <Typography variant="body1">{post.content}</Typography>
        </Grid>

        <Grid item>
          <CardActions disableSpacing>
            <IconButton aria-label="View">
              <RemoveRedEye />
              <Typography variant="body2">{post.views}</Typography>
            </IconButton>
            <IconButton aria-label="Like">
              <ThumbUp />
              <Typography variant="body2">{post.likes}</Typography>
            </IconButton>
            <IconButton aria-label="Dislike">
              <ThumbDown />
              <Typography variant="body2">{post.dislikes}</Typography>
            </IconButton>
          </CardActions>
        </Grid>
      </CardGrid>
    </OuterGrid>
  );
};

export default PostCard;
