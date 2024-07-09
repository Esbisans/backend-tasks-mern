/* 
    Tasks Routes
    host + /api/tasks
*/

const {Router} = require('express')
const { check } = require('express-validator');
const { fieldValidator } = require('../middlewares/field-validator');
const { getTasks, createTask, updateTask, deleteTask, setTasks } = require('../controllers/tasks');

const router = Router();

// getAllTasks
router.get('/', getTasks);

// Set (replace all) tasks
router.put('/set', setTasks);

// Create a new task
router.post('/', 
    [
        check('name' , 'The name is required').not().isEmpty(),
        fieldValidator
    ],
    createTask);

// Update a task
router.put('/:id',
    [
        check('name' , 'The name is required').not().isEmpty(),
        fieldValidator
    ], 
    updateTask);

// Delete a task
router.delete('/:id', deleteTask);

module.exports = router;