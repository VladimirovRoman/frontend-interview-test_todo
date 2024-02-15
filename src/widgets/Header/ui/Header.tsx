/* VENDOR */
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/* APPLICATION */
import './Header.css';
import { ModalCreateItem } from '../../../features/ModalCreateItem/ModalCreateItem';

export const Header = () => {
    const { pathname } = useLocation();
    const isCategories = pathname.includes('categories');
    const [createModalActive, setCreateModalActive] = useState(false);

    return (
        <header className="header">
            <h1 className="header__title">ToDo List</h1>
            <nav className="header__nav">
                <ul className="header__list">
                    <li
                        className={
                            !isCategories ? 'header__list-item header__list-item_active' : 'header__list-item'
                        }
                    >
                        <Link to="tasks">Задачи</Link>
                    </li>
                    <li
                        className={
                            isCategories ? 'header__list-item header__list-item_active' : 'header__list-item'
                        }
                    >
                        <Link to="categories">Категории</Link>
                    </li>
                </ul>
                <button
                    className="header__button"
                    onClick={() => {
                        setCreateModalActive(true);
                    }}
                >
                    {isCategories ? 'Добавить категорию' : 'Добавить задачу'}
                </button>
            </nav>
            <ModalCreateItem active={createModalActive} setActive={setCreateModalActive} />
        </header>
    );
};
