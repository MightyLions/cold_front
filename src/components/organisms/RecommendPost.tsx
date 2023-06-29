import {Box, Container, Grid, styled, Typography} from "@mui/material";

const CustomGrid = styled(Grid)(() => ({
  backgroundColor : '',
  borderRadius: '5px',
  outline: '2px solid black',
}));

function RecommendPost() {
  return (
    <Container maxWidth="lg">
      <Grid sm={12}>
        <Box>
          <Typography variant="h5">
            🔥추천게시글
          </Typography>
        </Box>
      </Grid>
      <Grid container mt={1} xs={12} justifyContent="space-between" wrap="nowrap">
        <CustomGrid item marginY={1} marginRight={1}>
          <Typography align="center" variant="h6" noWrap={true}>1</Typography>
        </CustomGrid>
        <CustomGrid item xs={1} marginY={1} marginRight={1}>
          <Typography align="center" variant="h6" noWrap={true}>❤️</Typography>
        </CustomGrid>
        <CustomGrid item xs={3} md={2} marginY={1} marginRight={1}>
          <Typography align="center" variant="h6" noWrap={true}>유저이름</Typography>
        </CustomGrid>
        <CustomGrid item xs={8} md={8} marginY={1}>
          <Typography align="center" variant="h6" noWrap={true}>제목</Typography>
        </CustomGrid>
        <CustomGrid item marginY={1}>
          <Typography align="center" variant="h6" noWrap={true}>⬆️</Typography>
        </CustomGrid>
      </Grid>
    </Container>
  )
}

export default RecommendPost;