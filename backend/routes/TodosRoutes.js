const express = require("express");
const router = express.Router();
const todos = require("../controllers/TodosController");
const user = require("../controllers/UsersController");

// READ
router.get("/", user.authMiddleware, todos.getTasks);

// CREATE
router.post("/:id", todos.createTask);

// UPDATE
router.put("/:id", todos.updateTask);

// UPDATE TOGGLE COMPLETED
router.put("/:id/toggle", todos.toggleTaskCompleted);

// DELETE
router.delete("/:id/delete", todos.deleteTask);

module.exports = router;
