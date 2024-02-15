/* VENDOR */
import React from 'react';

/* APPLICATION */
import './Modal.css';

interface ModalProps {
    item?: {
        id: string;
        name: string;
        description: string;
        category?: string;
    };
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    clearState?(): void;
}

export const Modal: React.FC<ModalProps> = ({ clearState, active, setActive, children }) => {
    const handleModalClick = () => {
        clearState && clearState();
        setActive(false);
    };

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => handleModalClick}>
            <div className="modal__content" onClick={handleContentClick}>
                {children}
            </div>
        </div>
    );
};
