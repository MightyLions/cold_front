import {Avatar, Card, CardHeader, IconButton, styled} from "@mui/material";
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
          title = "작성자 이름"
          subheader = "2023년 06월 14일"
        />
      </TransparentCard>
  );
}
