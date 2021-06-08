const SERVER_API = 'http://127.0.0.1:5000/api/tasks';

const configureFetchOptions = (method, body) => ({
  method,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  body: JSON.stringify(body),
});

const create = async data => {
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
};

const getAll = async () => {
  try {
    const res = await fetch(SERVER_API);
    return res.json();
  } catch (err) {
    return err;
  }
};

const getOne = async id => {
  try {
    const res = await fetch(`${SERVER_API}/${id}`);
    return res.json();
  } catch (err) {
    return err;
  }
};

const update = async data => {
  const reqData = {};
  if (data.id) {
    reqData.id = data.id;
  } else {
    throw new Error('id undefined');
  }
  if (data.title) {
    reqData.title = data.title;
  }
  if (data.text) {
    reqData.text = data.text;
  }
  if (data.completed !== undefined) {
    reqData.completed = data.completed;
  }
  try {
    const res = await fetch(`${SERVER_API}`, configureFetchOptions('PUT', reqData));
    return res.json();
  } catch (err) {
    return err;
  }
};

const remove = async id => {
  try {
    const res = await fetch(`${SERVER_API}/${id}`, { method: 'DELETE' });
    return res.json();
  } catch (err) {
    return err;
  }
};

const tasksRepository = {
  create, getAll, getOne, remove, update,
};

export {
  tasksRepository,
};
