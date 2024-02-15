/* VENDOR */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

/* APPLICATION */
import { Modal } from '../../shared/ui/Modal/Modal';
import { ModalHeader } from '../../shared/ui/Modal/ModalHeader';
import { ModalInput } from '../../shared/ui/Modal/ModalInput';
import { ModalRow } from '../../shared/ui/Modal/ModalRow';
import { ModalTextarea } from '../../shared/ui/Modal/ModalTextarea';
import { ModalFooter } from '../../shared/ui/Modal/ModalFooter';
import { tasksAdded } from '../../pages/Tasks/model/tasksSlice';
import { categoriesAdded } from '../../pages/Categories/model/categoriesSlice';
import { ModalCreateItemProps } from './ModalCreateItem.props';

export const ModalCreateItem: React.FC<ModalCreateItemProps> = ({ active, setActive }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const isCategories = pathname.includes('categories');
    const [name, setName] = useState('');
    const [selected, setSelected] = useState('');
    const [description, setDescription] = useState('');

    function clearState() {
        setName('');
        setDescription('');
        setSelected('');
    }

    const handleModalSubmit = () => {
        if (name) {
            dispatch(
                isCategories
                    ? categoriesAdded({ name, description })
                    : tasksAdded({
                          name,
                          description,
                          category: selected,
                      })
            );
            clearState();
            setActive(false);
        }
    };

    return (
        <Modal active={active} setActive={setActive} clearState={clearState}>
            <ModalHeader
                clearState={clearState}
                setActive={setActive}
                title={isCategories ? 'Создание категории' : 'Создание задачи'}
            />
            {isCategories ? (
                <ModalInput name={name} setName={setName} size="large" />
            ) : (
                <ModalRow name={name} setName={setName} selected={selected} setSelected={setSelected} />
            )}
            <ModalTextarea description={description} setDescription={setDescription} />
            <ModalFooter
                setActive={setActive}
                clearState={clearState}
                submitBtnText="Создать"
                size="large"
                onSubmit={handleModalSubmit}
            />
        </Modal>
    );
};
