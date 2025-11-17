const express = require('express');
const app = express();
const port = 3000;
app.use(express.json()); // Middleware for JSON bodies

// Global tasks array
const tasks = [
  { id: 1, title: "Task 1", completed: false, priority: "low", createdAt: new Date() },
  { id: 2, title: "Task 2", completed: false, priority: "medium", createdAt: new Date() },
  { id: 3, title: "Task 3", completed: false, priority: "high", createdAt: new Date() },
  { id: 4, title: "Task 4", completed: false, priority: "medium", createdAt: new Date() },
  { id: 5, title: "Task 5", completed: false, priority: "low", createdAt: new Date() }
];
app.locals.tasks = tasks;

const tasksRouter = require('./routes/tasks');

app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

app.get('/health', (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime()
  });
});

app.use('/tasks', tasksRouter);  // Handles /tasks and /tasks/:id
app.use('/task', tasksRouter);   // Handles /task/:id

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
