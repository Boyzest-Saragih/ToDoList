const express = require('express');
const router = express.Router();
const todosController = require('../controllers/TodosController');

// READ
router.get('/', todosController.getTasks);

// CREATE
router.post('/:id', todosController.createTask);

// UPDATE
router.put('/:id', todosController.updateTask);

// UPDATE TOGGLE COMPLETED
router.put('/:id/toggle', todosController.toggleTaskCompleted);

// DELETE
router.delete('/:id/delete', todosController.deleteTask);

module.exports = router;