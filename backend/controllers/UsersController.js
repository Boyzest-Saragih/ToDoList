const User = require("../models/User");

// READ
const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// AUTH
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const newUser = new User({ name, email, password, role: "user" });
    await newUser.save();
    res.status(200).json({ message: "Register Succesfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user);

    if (!user || password !== user.password) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    req.session.userId = user._id;
    req.session.role = user.role;
    req.session.name = user.name;
    await req.session.save();
    console.log(req.session);
    res.json({ mesage: "Login succesfully", user: { user } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const logoutUser = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) return res.status(500).json({ message: "Logout failed" });
      res.clearCookie("connect.sid"); // Hapus cookie session (penting untuk menghapus session di browser)
      res.json({ message: "Logged out" });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// EDIT
const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "Task DELETED" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CHECK USER LOGIN
const getCurrentUser = async (req, res) => {
  console.log("Session on request:", req.session);

  try {
    if (!req.session.userId) {
      return res.status(401).json({ message: "User not logged" });
    }
    res.json({
      userId: req.session.userId,
      role: req.session.role,
      name: req.session.name,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  registerUser,
  loginUser,
  editUser,
  deleteUser,
  getCurrentUser,
  logoutUser,
};
