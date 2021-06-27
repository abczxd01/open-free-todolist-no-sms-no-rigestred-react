import { rest } from 'msw';

export const handlers = [
  rest.get('http://127.0.0.1:5000/api/tasks', (req, res, ctx) => {
    console.log(req);
    return res(
      ctx.body(
        JSON.stringify([{ id: '12', title: 'sadasd', completed: false }])
      )
    );
  }),
  rest.put('http://127.0.0.1:5000/api/tasks', (req, res, ctx) => {
    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    );
  }),
  rest.post('http://127.0.0.1:5000/api/tasks', (req, res, ctx) => {
    const { username } = req.body;
    return res(ctx.json({}));
  }),
  rest.delete('http://127.0.0.1:5000/api/tasks/:id', (req, res, ctx) => {
    const { username } = req.body;
    return res(ctx.json({}));
  }),
];
