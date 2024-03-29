//This file contians a reducer sample which is being for closing and openning drawer container
//This reducer is for sample and you can remove this file from your project.

import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import { IDrawerType } from '../../models/redux/IDrawerType';

const initialState:IDrawerType ={
    isDrawerOpen:false,
    todoId:-1
}

export const todoSlice = createSlice({
    name:'todoRedcuer',
    initialState,
    reducers:{
        closeDrawerFunc:(state=initialState,action:PayloadAction)=>{
            state.isDrawerOpen = false;
            state.todoId = -1;
        },
        openDrawerFunc:(state=initialState,action:PayloadAction<number>)=>{
            state.isDrawerOpen = true;
            state.todoId = action.payload;
        }
    }
});

export const {closeDrawerFunc,openDrawerFunc} = todoSlice.actions;
export default todoSlice.reducer;