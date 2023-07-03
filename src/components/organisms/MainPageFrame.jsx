import RecommendPost from "./RecommendPost";
import Dropdown from "../molecules/DropDown";
import {Container, Grid} from "@mui/material";

function MainPageFrame () {
  return (
    <>
      <RecommendPost/>
      <Container maxWidth="lg">
        <Grid container xs={12} mt={2} justifyContent="space-between" wrap="nowrap">
          <Grid item xs={4} md={2}>
            <Dropdown title={'기업태그'} items={['1', '2', '3']} values={['1', '2', '3']} defaultValue={'3'}></Dropdown>
          </Grid>
          <Grid item xs={8} md={4}>
            <Dropdown title={'정렬'} items={['추천', '최신']} values={['recommended', 'newest']} defaultValue={'recommended'}></Dropdown>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default MainPageFrame;