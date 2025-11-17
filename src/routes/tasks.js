const express = require('express');
const router = express.Router();

// GET /tasks - Retrieve all tasks
router.get('/', (req, res) => {
  const tasks = req.app.locals.tasks;
  res.json(tasks);
});

// POST /tasks - Create a new task (optional, for future extensibility)
router.post('/', (req, res) => {
  const { title, priority = 'low' } = req.body;
  if (!title || typeof title !== 'string' || title.trim().length === 0) {
    return res.status(400).json({ error: 'Title is required and must be a non-empty string' });
  }
  const newTask = {
    id: Date.now(),
    title: title.trim(),
    completed: false,
    priority,
    createdAt: new Date()
  };
  const tasks = req.app.locals.tasks;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// GET /task/:id - Get task by ID
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const tasks = req.app.locals.tasks;
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }
  const task = tasks.find(t => t.id === id);
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
});

module.exports = router;
