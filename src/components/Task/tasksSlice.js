/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  getAllTask, deleteTask, updateTask, createTask,
} from './actions';

const sliceTasks = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    isLoad: false,
    isError: false,
  },
  extraReducers: {
    [getAllTask.pending]: state => {
      state.isLoad = true;
    },
    [getAllTask.fulfilled]: (state, action) => {
      state.isLoad = false;
      state.tasks = action.payload;
    },
    [getAllTask.rejected]: state => {
      state.isError = true;
    },
    [deleteTask.fulfilled]: (state, action) => {
      const searchIndex = state.tasks.findIndex(
        task => task.id === action.payload.id,
      );
      state.tasks.splice(searchIndex, 1);
    },
    [updateTask.fulfilled]: (state, action) => {
      console.log('fl');
      const searchIndex = state.tasks.findIndex(
        task => task.id === action.payload.id,
      );
      state.tasks[searchIndex] = action.payload;
    },
    [updateTask.rejected]: (state, action) => {
      console.log('rej');
    },
    [updateTask.pending]: (state, action) => {
      console.log('pen');
    },
    [createTask.fulfilled]: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});

export const tasksReducers = sliceTasks.reducer;
