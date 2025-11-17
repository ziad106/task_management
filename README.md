# Task Management API

A simple REST API built with Node.js and Express for managing tasks.

## Features

- RESTful API endpoints for task management
- Health check monitoring
- Error handling for invalid requests
- Modular route structure using Express Router

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Setup Instructions

1. Clone the repository:
git clone https://github.com/YOUR-USERNAME/task-management.git
cd task-management
2. Install dependencies:
npm install
3. Start the server:
node src/index.js

4. The server will run on `http://localhost:3000`

## API Endpoints

### Root Endpoint
- **GET** `/`
- Returns: `"Task Management API is running!"`

### Health Check
- **GET** `/health`
- Returns: Health status and uptime
- Example response:
 ```
 {
   "status": "healthy",
   "uptime": 123.45
 }
 ```

### Tasks
- **GET** `/tasks`
- Returns: Array of all tasks
- Response: Array of task objects with `id`, `title`, `completed`, `priority`, `createdAt`

### Single Task
- **GET** `/task/:id`
- Returns: Single task by ID
- Parameters: `id` (integer)
- Responses:
 - `200`: Task object
 - `400`: Invalid ID format
 - `404`: Task not found

## Project Structure
task-management/
├── src/
│ ├── index.js
│ └── routes/
│ └── tasks.js
├── package.json
├── tasks-response.json
├── api-responses.txt
├── .gitignore
└── README.md
## Testing

Use Postman or any HTTP client to test the endpoints.

Example requests:
curl http://localhost:3000/
curl http://localhost:3000/health
curl http://localhost:3000/tasks
curl http://localhost:3000/task/1

## Error Handling

- **400 Bad Request**: Invalid ID format (e.g., `/task/abc`)
- **404 Not Found**: Task ID doesn't exist (e.g., `/task/999`)

## Git Workflow

This project uses feature branches. Current branches:
- `main` - Production-ready code
- `features/routes` - Route refactoring and improvements

## License

MIT
