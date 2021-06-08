import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { tasksRepository } from '../utils/tasksRepository';

export const a = createAsyncThunk('tasksGetAll', async () => {
  const res = await tasksRepository.getAll();
  return res;
});

const sliceTasks = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    isFetching: true,
  },
  reducers: {
    deleteTask(state, action) {
      const searchIndex = state.tasks.findIndex(
        task => task.id === action.payload,
      );
      state.tasks.splice(searchIndex, 1);
    },
    addTask(state, action) {
      state.tasks.push({
        title: action.payload,
        completed: false,
      });
    },
    completeTask(state, action) {
      const searchIndex = state.tasks.findIndex(
        task => task.id === action.payload,
      );
      state.tasks[searchIndex].completed = !state.tasks[searchIndex].completed;
    },
  },
  extraReducers: {
    [a.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.tasks =action.payload;
    },
  },
});

export const tasksReducers = sliceTasks.reducer;
export const { deleteTask, addTask, completeTask } = sliceTasks.actions;
