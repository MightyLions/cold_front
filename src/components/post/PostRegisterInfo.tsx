import {Avatar, Card, CardHeader, IconButton, Typography, styled} from "@mui/material";
import {red} from "@mui/material/colors";

const TransparentCard = styled(Card)(({ }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));

export const PostRegisterInfo = () => {
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
          title = {<Typography variant="h6">
            작성자 이름이 카테고리를 공유했어요.
          </Typography>}          
          subheader = "@{기업 이름} / 약 {한 시간 전}"
        />
      </TransparentCard>
  );
}
