import Router from 'express';
import { TaskController } from './TaskController.js';

export const router = new Router();
const taskController = new TaskController();

router.post('/tasks', taskController.create.bind(taskController));
router.options('/tasks', taskController.options);
router.options('/tasks/:id', taskController.options);
router.get('/tasks', taskController.getAll.bind(taskController));
router.get('/tasks/:id', taskController.getOne.bind(taskController));
router.put('/tasks', taskController.update.bind(taskController));
router.delete('/tasks/:id', taskController.delete.bind(taskController));
