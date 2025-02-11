const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
  userId: String,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
