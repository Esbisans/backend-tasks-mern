/* 
    Tasks Routes
    host + /api/tasks
*/

const {Router} = require('express')
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/tasks');

const router = Router();

// getAllTasks
router.get('/', getTasks);

// Create a new task
router.post('/', createTask);

// Update a task
router.put('/:id', updateTask);

// Delete a task
router.delete('/:id', deleteTask);

module.exports = router;