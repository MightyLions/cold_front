import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  styled,
  Grid,
  Divider,
  Avatar,
  Button,
  Box,
  Modal,
} from '@mui/material';
import { useState } from 'react';

const StyledCard = styled(Card)(() => ({
  backgroundColor: '',
  borderRadius: '15px', // tmp
  marginLeft: '40px', // tmp
  marginRight: '40px', // tmp
  marginTop: '-5px', // tmp
}));

export const PostCard = () => {
  const likeImg = 'https://cdn-icons-png.flaticon.com/512/6611/6611465.png';
  const fileImg =
    'https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-attachment-icon-design-png-image_1015861.jpg';
  const commentImg =
    'https://cdn-icons-png.flaticon.com/512/811/811476.png?w=1060&t=st=1687443821~exp=1687444421~hmac=59c3e27bf8d61ef8cf1eed61c715d5af1cf73141a7074957999aa13727488bc0';

  // 좋아요
  const [likeCount, setLikeCount] = useState(0);
  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  // 모달창
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledCard>
      <CardHeader
        title={
          <Typography variant="h6" fontWeight="bold" fontSize={35}>
            우리는 왜 백엔드 개발자인데 기획과 프론트 개발을 같이 해야 할까?
          </Typography>
        }
      />
      <CardContent>
        <Typography fontWeight="bold" color="gray">
          우리는 지난 2개월 동안 기획과 백엔드 개발을 병행하였다. 가끔 기획에서
          꼬이고 백엔드 개발에 진전이 생기지 않아 미치는 줄 알았으나 나름대로 잘
          해왔다고 생각한다. 하지만 이제는 프론트까지 하게 되었다. 대체
          왜일까...? 내가 프론트 개발을 하면서 화가 나는 이유는 백엔드 개발이
          하고 싶어서도 아니고 너무 바빠서도 아니며 어려워서도 아니다. 프론트
          개발이 재밌어서다...이럴거면 프론트 개발자 했지..
        </Typography>
      </CardContent>
      <div style={{ margin: '10px' }}>
        <Divider variant="middle" />
        <CardActions>
          <Grid container>
            <Grid xs display="flex" justifyContent="left" alignItems="center">
              <Button onClick={handleLike}>
                <Avatar src={likeImg} /> {likeCount}
              </Button>
            </Grid>
            <Grid xs display="flex" justifyContent="center" alignItems="center">
              <Button>
                <Avatar src={fileImg} />
              </Button>
            </Grid>
            <Grid xs display="flex" justifyContent="right" alignItems="center">
              <Button onClick={handleOpen}>
                <Avatar src={commentImg} style={{ padding: '6px' }} />
              </Button>
              <Modal open={open} onClose={handleClose}>
                <Box
                  sx={{
                    bgcolor: 'white',
                    p: 2,
                    textAlign: 'center',
                    margin : '10%'
                  }}>
                  모달창
                </Box>
              </Modal>
            </Grid>
          </Grid>
        </CardActions>
      </div>
    </StyledCard>
  );
};
