import { Card, styled } from "@mui/material";
import { PostCard } from "../components/post/PostCard";
import {PostRegisterInfo} from "../components/post/PostRegisterInfo";

const CenterCard = styled(Card)(({ }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  width : "50%",
  margin : "5%"
}));

export const HomePage = () => {
  return <CenterCard>
    <PostRegisterInfo></PostRegisterInfo>
    <PostCard></PostCard>
  </CenterCard>
};
