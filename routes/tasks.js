/* 
    Tasks Routes
    host + /api/tasks
*/

const {Router} = require('express')
const { getTasks, createTask, updateTask, deleteTask, setTasks } = require('../controllers/tasks');

const router = Router();

// getAllTasks
router.get('/', getTasks);

// Set (replace all) tasks
router.put('/set', setTasks);

// Create a new task
router.post('/', createTask);

// Update a task
router.put('/:id', updateTask);

// Delete a task
router.delete('/:id', deleteTask);

module.exports = router;