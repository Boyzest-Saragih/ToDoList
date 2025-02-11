const Task = require('../models/Task');

// READ
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE
const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const newTask = new Task({ title, completed: false });
    await newTask.save();
    res.status(200).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(id, { title }, { new: true });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE TOGGLE COMPLETED
const toggleTaskCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { completed: !task.completed },
      { new: true }
    );
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Task DELETED' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  toggleTaskCompleted,
  deleteTask,
};