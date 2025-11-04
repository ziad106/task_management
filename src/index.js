const express = require('express');
const app = express();
const port = 3000;
const tasks = [
       { id: 1, title: 'Learn Node.js', completed: false },
       { id: 2, title: 'Build REST API', completed: false }
];
app.get('/', (req, res) => {
       res.send('Task Management API is running!');
});
// GET /tasks - return 5 tasks with extended fields
app.get('/tasks', (req, res) => {
    const tasks = [
      { 
        id: 1, 
        title: "Learn Node.js", 
        completed: false, 
        priority: "high", 
        createdAt: new Date('2025-11-01') 
      },
      { 
        id: 2, 
        title: "Build REST API", 
        completed: false, 
        priority: "medium", 
        createdAt: new Date('2025-11-02') 
      },
      { 
        id: 3, 
        title: "Study Express Router", 
        completed: true, 
        priority: "low", 
        createdAt: new Date('2025-11-03') 
      },
      { 
        id: 4, 
        title: "Setup Git Repository", 
        completed: true, 
        priority: "medium", 
        createdAt: new Date('2025-11-04') 
      },
      { 
        id: 5, 
        title: "Deploy to Production", 
        completed: false, 
        priority: "high", 
        createdAt: new Date('2025-11-05') 
      }
    ];
    res.json(tasks);
  });
  // GET /task/:id - get a single task by ID
app.get('/task/:id', (req, res) => {
    const tasks = [
      { id: 1, title: "Learn Node.js", completed: false, priority: "high", createdAt: new Date('2025-11-01') },
      { id: 2, title: "Build REST API", completed: false, priority: "medium", createdAt: new Date('2025-11-02') },
      { id: 3, title: "Study Express Router", completed: true, priority: "low", createdAt: new Date('2025-11-03') },
      { id: 4, title: "Setup Git Repository", completed: true, priority: "medium", createdAt: new Date('2025-11-04') },
      { id: 5, title: "Deploy to Production", completed: false, priority: "high", createdAt: new Date('2025-11-05') }
    ];
  
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
  
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
  
    res.json(task);
  });
  
  // GET /health - health check endpoint
app.get('/health', (req, res) => {
    res.json({
      status: "healthy",
      uptime: process.uptime()
    });
  });
  
  
app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
});
