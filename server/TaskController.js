/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import Task from './Task.js';

export class TaskController {
  async validateTasks(tasks) {
    return tasks.map(value => {
      const { _id: id, text, title, completed } = value;
      const task = { id, title, completed };
      if (text) {
        task.text = text;
      }
      return task;
    });
  }

  async validateTask(task) {
    const { _id: id, text, title, completed } = task;

    const tasksValidated = { id, title, completed };

    if (text) {
      tasksValidated.text = text;
    }
    return tasksValidated;
  }

  async options(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE');
    res.end();
  }

  async create(req, res) {
    try {
      const completed = false;
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
      const { title, text } = req.body;
      const task = await Task.create({
        title,
        text,
        completed,
      });
      const taskValidated = await this.validateTask(task);
      return res.json(taskValidated);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(req, res) {
    try {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
      const tasks = await Task.find();
      const tasksValidated = await this.validateTasks(tasks);
      return res.json(tasksValidated);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
      const { id } = req.params;
      if (!id) res.status(400).json({ message: 'Id не указан' });
      const task = await Task.findById(id);
      const taskValidated = await this.validateTask(task);
      return res.json(taskValidated);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
      const task = req.body;
      if (!task.id) res.status(400).json({ message: 'Id не указан' });
      const updateTask = await Task.findByIdAndUpdate(task.id, task, {
        new: true,
      });
      const taskValidated = await this.validateTask(updateTask);
      return res.json(taskValidated);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
      const { id } = req.params;
      if (!id) res.status(400).json({ message: 'Id не указан' });
      const task = await Task.findByIdAndDelete(id);
      const taskValidated = await this.validateTask(task);
      return res.json(taskValidated);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
