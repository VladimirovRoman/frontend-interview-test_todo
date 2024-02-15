import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import categoriesReducer from '../../pages/Categories/model/categoriesSlice';
import tasksReducer from '../../pages/Tasks/model/tasksSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        tasks: tasksReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
