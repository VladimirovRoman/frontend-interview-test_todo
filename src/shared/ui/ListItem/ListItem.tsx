/* VENDOR */
import { useState } from 'react';
import { useSelector } from 'react-redux';

/* APPLICATION */
import './ListItem.css';
import edit from '../../assets/icons/edit.svg';
import remove from '../../assets/icons/remove.svg';
import { selectAllCategories } from '../../../pages/Categories/model/categoriesSlice';
import { ModalEditItem } from '../../../features/ModalEditItem/ModalEditItem';
import { ModalRemoveItem } from '../../../features/ModalRemoveItem/ModalRemoveItem';

interface ListItemProps {
    item: {
        id: string;
        name: string;
        description: string;
        category?: string;
    };
}

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
    const categories = useSelector(selectAllCategories);
    const [editModalActive, setEditModalActive] = useState(false);
    const [removeModalActive, setRemoveModalActive] = useState(false);

    return (
        <li className="list-item">
            <div className="list-item__col1">
                <div className="list-item__col1-row1">
                    <h3 className="list-item__col1-row1__title">{item.name}</h3>
                    {item.category && (
                        <span className="list-item__col1-row1__category">
                            {categories.find((category) => category.id === item.category)?.name}
                        </span>
                    )}
                </div>
                <div className="list-item__col1-row2">{item.description}</div>
            </div>
            <div className="list-item__col2">
                <button className="list-item__col2__btn" onClick={() => setEditModalActive(true)}>
                    <img src={edit} alt="edit" />
                </button>
                <button className="list-item__col2__btn" onClick={() => setRemoveModalActive(true)}>
                    <img src={remove} alt="remove" />
                </button>
            </div>
            <ModalEditItem item={item} active={editModalActive} setActive={setEditModalActive} />
            <ModalRemoveItem item={item} active={removeModalActive} setActive={setRemoveModalActive} />
        </li>
    );
};
