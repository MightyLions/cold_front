import {Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions} from '@mui/material';
import {useState} from 'react';
import {styled} from "@mui/system";

const StyledTitle = styled('h2')(({theme}) => ({
    margin: 0,
    marginBottom: theme.spacing(0), // 아래 여백 줄임
    marginTop: theme.spacing(0), // 위 여백 줄임
    textAlign: 'center', // 중앙 정렬
    fontSize: '1.3rem',
}));

const StyledButtonContainer = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
}));

const StyledCategoryLabel = styled('span')(({theme}) => ({
    marginRight: theme.spacing(1),
    fontWeight: 'bold',
}));

const StyledButton = styled(Button)(({theme}) => ({
    marginRight: theme.spacing(1),
    fontSize: '0.5rem', // 버튼 내 글자 크기 조정
    padding: theme.spacing(0.3, 0.8), // 버튼 크기 조정
}));

interface PostModalProps {
    open: boolean;
    handleClose: () => void;
}

const CreatePostModal = ({open, handleClose}: PostModalProps) => {
    const [category, setCategory] = useState('자유');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const date = new Date();

    const handleSubmit = () => {
        console.log({
            category,
            title,
            content
        });
        handleClose();
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <StyledTitle>
                <DialogTitle>{`${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`}</DialogTitle>
            </StyledTitle>
            <DialogContent>
                <StyledButtonContainer>
                    <StyledCategoryLabel>카테고리:</StyledCategoryLabel>
                    <StyledButton
                        variant={category === '자유' ? 'contained' : 'outlined'}
                        size="small"
                        onClick={() => setCategory('자유')}
                    >
                        자유
                    </StyledButton>
                    <StyledButton
                        variant={category === '인사이트' ? 'contained' : 'outlined'}
                        size="small"
                        onClick={() => setCategory('인사이트')}
                    >
                        인사이트
                    </StyledButton>
                    <StyledButton
                        variant={category === '고민' ? 'contained' : 'outlined'}
                        size="small"
                        onClick={() => setCategory('고민')}
                    >
                        고민
                    </StyledButton>
                    <StyledButton
                        variant={category === '질문' ? 'contained' : 'outlined'}
                        size="small"
                        onClick={() => setCategory('질문')}
                    >
                        질문
                    </StyledButton>
                </StyledButtonContainer>
                <TextField margin="dense" label="제목을 입력하세요" fullWidth variant="standard"
                           onChange={(e) => setTitle(e.target.value)}/>
                <TextField margin="dense" label="내용을 자유롭게 작성해주세요." fullWidth variant="standard" multiline rows={4}
                           onChange={(e) => setContent(e.target.value)}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit}>게시하기</Button>
                <Button onClick={handleClose}>뒤로가기</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreatePostModal;
