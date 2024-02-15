/* VENDOR */
import { useSelector } from 'react-redux';

/* APPLICATION */
import { ListItem } from '../../../shared/ui/ListItem/ListItem';
import { selectAllCategories } from '../model/categoriesSlice';

export const Categories = () => {
    const categories = useSelector(selectAllCategories);

    return (
        <ul>
            {categories.map((category) => (
                <ListItem key={category.id} item={category} />
            ))}
        </ul>
    );
};
