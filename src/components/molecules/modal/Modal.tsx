import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  Button,
  ListItemText,
} from '@mui/material';

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  handlePostOpen: () => void;
  handleProductOpen: () => void;
}

const Modal = ({
  open,
  handleClose,
  handlePostOpen,
  handleProductOpen,
}: ModalProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>어떤 이야기를 전하고 싶나요?</DialogTitle>
      <List>
        <ListItem button onClick={handlePostOpen}>
          <ListItemText primary="자유 게시글 게시하기" />
        </ListItem>
        <ListItem button onClick={handleProductOpen}>
          <ListItemText primary="프로덕트 공유하기" />
        </ListItem>
        <ListItem button>
          <Button onClick={handleClose}>팀 빌딩하기</Button>
        </ListItem>
      </List>
    </Dialog>
  );
};

export default Modal;
