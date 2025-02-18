const express = require("express");
const router = express.Router();
const todos = require("../controllers/TodosController");
const user = require("../controllers/UsersController");

// READ
router.get("/", user.authMiddleware, todos.getTasks);

// CREATE
router.post("/:id", user.authMiddleware, todos.createTask);

// UPDATE
router.put("/:id", user.authMiddleware, todos.updateTask);

// UPDATE TOGGLE COMPLETED
router.put("/:id/toggle", user.authMiddleware, todos.toggleTaskCompleted);

// DELETE
router.delete("/:id/delete", user.authMiddleware, todos.deleteTask);

module.exports = router;
