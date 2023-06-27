import {Modal, TextField, Divider, Button, Box, DialogActions} from '@mui/material';
import {styled} from '@mui/system';
import React from 'react';

interface ProductModalProps {
    open: boolean;
    handleClose: () => void;
}

const StyledBox = styled(Box)(({theme}) => ({
    position: 'absolute',
    width: '50%',
    maxHeight: '80vh', // 최대 높이 지정
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette?.background?.paper || 'white',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(3),
    outline: 'none',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    overflowY: 'auto', // 스크롤바
}));

const StyledTitle = styled('h2')(({theme}) => ({
    margin: 0,
    marginBottom: theme.spacing(0), // 아래 여백 줄임
    marginTop: theme.spacing(0), // 위 여백 줄임
    textAlign: 'center', // 중앙 정렬
    fontSize: '1.3rem',
}));

const StyledContent = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: theme.spacing(0.5),
}));

const StyledCheckItem = styled('p')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.8rem',
    paddingLeft: theme.spacing(0.5),
    marginTop: theme.spacing(0.25),
    marginBottom: theme.spacing(0.25),
}));

const StyledTextField = styled(TextField)(({theme}) => ({
    marginBottom: theme.spacing(2), // 아래로 여백 추가
}));

const CreateProductModal: React.FC<ProductModalProps> = ({open, handleClose}) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <StyledBox>
                <StyledTitle>프로덕트 소개하기</StyledTitle>
                <Divider/>
                <StyledContent>
                    <p>다양한 프로덕트를 자유롭게 소개해보세요.</p>
                    <StyledCheckItem>✅ 리뷰를 받고 싶은 프로덕트</StyledCheckItem>
                    <StyledCheckItem>✅ 투자를 받고 싶은 프로덕트</StyledCheckItem>
                    <StyledCheckItem>✅ 다양한 사람들에게 소개하고 싶은 프로덕트</StyledCheckItem>
                    <StyledCheckItem>✅ 개선점을 찾고 싶은 프로덕트</StyledCheckItem>
                </StyledContent>
                <Divider/>
                <StyledTextField label="프로덕트 이름" placeholder="예시 - 콜드 피치"/>
                <StyledTextField label="프로덕트 한 줄 소개" placeholder="예시 - 놀라움을 꿈꾸는 몽상가들의 소통 공간"/>
                <StyledTextField label="웹사이트 링크" placeholder="예시 -  https://coldpitch.com"/>
                <StyledTextField label="App Store 링크" placeholder="예시 - https://apps.apple.com/kr/app/coldpitch"/>
                <StyledTextField label="Google Play Store 링크"
                                 placeholder="예시 - https://play.google.com/store/apps/coldpitch"/>
                <Divider/>
                <TextField
                    label="프로덕트에 대한 자세한 설명"
                    placeholder="예시 - 다양한 아이디어를 여러 사람들에게 소개하고, 피드백을 받을 수 있는 자유로운 소통의 장 ‘콜드피치’입니다. 여러분의 새로운 프로덕트에 날개를 달아보세요!"
                    multiline
                    rows={4}
                />
                <DialogActions>
                    <Button onClick={handleClose}>게시하기</Button>
                    <Button onClick={handleClose}>뒤로가기</Button>
                </DialogActions>
            </StyledBox>
        </Modal>
    );
};

export default CreateProductModal;
