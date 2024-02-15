/* VENDOR */
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

/* APPLICATION */
import { Modal } from '../../shared/ui/Modal/Modal';
import { ModalHeader } from '../../shared/ui/Modal/ModalHeader';
import { ModalText } from '../../shared/ui/Modal/ModalText';
import { ModalFooter } from '../../shared/ui/Modal/ModalFooter';
import { tasksRemoved, tasksClearedCategories } from '../../pages/Tasks/model/tasksSlice';
import { categoriesRemoved } from '../../pages/Categories/model/categoriesSlice';
import { ModalRemoveItemProps } from './ModalRemoveItem.props';

export const ModalRemoveItem: React.FC<ModalRemoveItemProps> = ({ item, active, setActive }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const isCategories = pathname.includes('categories');
    const text = `Вы уверены, что хотите удалить задачу "${item.name}"?`;

    const handleModalSubmit = () => {
        if (isCategories) {
            dispatch(categoriesRemoved(item.id));
            dispatch(tasksClearedCategories(item.id));
            setActive(false);
        } else {
            dispatch(tasksRemoved(item.id));
        }
    };

    return (
        <Modal item={item} active={active} setActive={setActive}>
            <ModalHeader setActive={setActive} title={'Удаление задачи'} />
            <ModalText text={text} />
            <ModalFooter setActive={setActive} submitBtnText="Да" onSubmit={handleModalSubmit} />
        </Modal>
    );
};
