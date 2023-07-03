import CpButton from '../components/atoms/CpButton';
import Modal from '../components/molecules/modal/Modal';
import PostModal from '../components/molecules/modal/CreatePostModal';
import CreateProductModal from '../components/molecules/modal/CreateProductModal';
import { useState } from 'react';
import MainPageFrame from "../components/organisms/MainPageFrame";

export default () => {
    const [open, setOpen] = useState<boolean>(false);
    const [postOpen, setPostOpen] = useState<boolean>(false);
    const [productOpen, setProductOpen] = useState<boolean>(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handlePostClose = () => {
        setPostOpen(false);
        setOpen(true);
    };

    const handleProductClose = () => {
        setProductOpen(false);
        setOpen(true);
    };

    const handlePostOpen = () => {
        setOpen(false);
        setPostOpen(true);
    };

    const handleProductOpen = () => {
        setOpen(false);
        setProductOpen(true);
    };



    return (
        <>
            <div>main page</div>
            <MainPageFrame/>
            <div>
                <CpButton name="Open Modal" onclick={() => setOpen(true)} />
            </div>
            <Modal
                open={open}
                handleClose={handleClose}
                handlePostOpen={handlePostOpen}
                handleProductOpen={handleProductOpen}
            />
            <PostModal open={postOpen} handleClose={handlePostClose} />
            <CreateProductModal open={productOpen} handleClose={handleProductClose} />
        </>
    );
}
