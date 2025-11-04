const express = require('express');
const router = express.Router();

// Sample tasks data
const tasks = [
  { id: 1, title: "Learn Node.js", completed: false, priority: "high", createdAt: new Date('2025-11-01') },
  { id: 2, title: "Build REST API", completed: false, priority: "medium", createdAt: new Date('2025-11-02') },
  { id: 3, title: "Study Express Router", completed: true, priority: "low", createdAt: new Date('2025-11-03') },
  { id: 4, title: "Setup Git Repository", completed: true, priority: "medium", createdAt: new Date('2025-11-04') },
  { id: 5, title: "Deploy to Production", completed: false, priority: "high", createdAt: new Date('2025-11-05') }
];

// GET /tasks - return all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// GET /task/:id - get a single task by ID
router.get('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
  
    // Check if ID is a valid number
    if (isNaN(taskId)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }
  
    const task = tasks.find(t => t.id === taskId);
  
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
  
    res.json(task);
  });
  

module.exports = router;
