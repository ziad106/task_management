const express = require('express');
const app = express();
const PORT = 3000;

// Import routes
const tasksRouter = require('./routes/tasks');

// Root route
app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

// Health check route
app.get('/health', (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime()
  });
});

// Use tasks router
app.use('/tasks', tasksRouter);
app.use('/task', tasksRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
