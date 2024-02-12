import {configureStore} from '@reduxjs/toolkit';
import TodoReducer from './todo/TodoReducer';

//Registering TodoReducer into our configureStroe.
export const store = configureStore({
    reducer:{
        todo:TodoReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch