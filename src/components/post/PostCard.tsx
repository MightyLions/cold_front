import { Card, CardContent, CardHeader, Typography, styled } from "@mui/material"

const StyledCard = styled(Card)(() => ({
    backgroundColor : '',
    borderRadius: '15px',
    marginLeft : '40px',
    marginRight : '40px',
    marginTop : '-5px'
}));

export const PostCard = () => {
    return (
    <StyledCard>
        <CardHeader
        title = {
            <Typography variant="h6" fontWeight="bold" fontSize={35}>
                우리는 왜 백엔드 개발자인데 기획과 프론트 개발을 같이 해야 할까?
            </Typography>
            }
        />
        <CardContent>
            <Typography fontWeight="bold" color='gray'>
                 우리는 지난 2개월 동안 기획과 백엔드 개발을 병행하였다. 가끔 기획에서 꼬이고 백엔드 개발에 진전이 생기지 않아
                 미치는 줄 알았으나 나름대로 잘 해왔다고 생각한다. 하지만 이제는 프론트까지 하게 되었다. 대체 왜일까...?
                 내가 프론트 개발을 하면서 화가 나는 이유는 백엔드 개발이 하고 싶어서도 아니고 너무 바빠서도 아니며 어려워서도 아니다.
                 프론트 개발이 재밌어서다...이럴거면 프론트 개발자 했지..
            </Typography>
        </CardContent>
    </StyledCard>
    );
}