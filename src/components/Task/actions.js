import { createAsyncThunk } from '@reduxjs/toolkit';

const SERVER_API = 'http://127.0.0.1:5000/api/tasks';
const configureFetchOptions = (method, body) => ({
  method,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  body: JSON.stringify(body),
});

export const createTask = createAsyncThunk('tasks/create', async data => {
  const reqData = {
    title: data.title,
  };
  if (data.text) {
    reqData.text = data.text;
  }
  try {
    const res = await fetch(SERVER_API, configureFetchOptions('POST', reqData));
    return res.json();
  } catch (err) {
    return err;
  }
});

export const getAllTask = createAsyncThunk('tasks/getAll', async () => {
  try {
    const res = await fetch(SERVER_API);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    // console.log(err);
    return err;
  }
});

export const getOneTask = createAsyncThunk('tasks/getOne', async id => {
  try {
    const res = await fetch(`${SERVER_API}/${id}`);
    return res.json();
  } catch (err) {
    return err;
  }
});

export const updateTask = createAsyncThunk('tasks/update', async data => {
  try {
    const res = await fetch(SERVER_API, configureFetchOptions('PUT', data));
    return res.json();
  } catch (err) {
    return err;
  }
});

export const deleteTask = createAsyncThunk('tasks/delete', async id => {
  try {
    const res = await fetch(`${SERVER_API}/${id}`, { method: 'DELETE' });
    return res.json();
  } catch (err) {
    return err;
  }
});
