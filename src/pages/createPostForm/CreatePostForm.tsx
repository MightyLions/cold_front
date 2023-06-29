import React, { useState } from 'react';

const Modal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {/* 버튼 */}
            <button onClick={openModal}>자유로운 글쓰기</button>

            {/* 모달 */}
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>어떤 이야기를 전하고 싶나요?</h2>
                        {/* 모달 내용 작성 폼 */}
                        {/* 이곳에 모달 내용 작성 폼을 추가하세요 */}
                        <button onClick={closeModal}>닫기</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
