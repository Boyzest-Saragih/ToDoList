const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;
const saltRounds = 10;

cloudinary.config({
  cloud_name: "dk326mske",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// MIDDLEWARE
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "need token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "invalid token" });
  }
};

const adminMiddleware = (req, res, next) => {
  try {
    if (req.user.role === "admin") {
      next();
    }
  } catch (error) {
    return res.status(403).json({ message: "No Access, Admin Only" });
  }
};

// GET USERS DATA
const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    console.log(user);
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

    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
      role: "user",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    });

    await newUser.save();

    const token = jwt.sign(
      {
        userId: newUser._id,
        name: newUser.name,
        email: newUser.email,
        image: newUser.image,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res
      .status(200)
      .json({ message: "Register Succesfully", user: newUser.name });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid Email" });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        name: user.name,
        email: user.email,
        image: user.image,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ mesage: "Login succesfully", token, user: user.name });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
  });
  res.status(200).json({ message: "Logout succesfully" });
};

// EDIT
const editUserData = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, password: hashPassword },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "user not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editProfilePicture = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file choose" });
    }

    const userId = req.user.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const results = await cloudinary.uploader.upload(req.file.path, {
      folder: "profile_pictures",
      transformation: [
        { quality: "auto", fetch_format: "auto" },
        { width: 1200 },
      ],
    });

    user.image = results.secure_url;
    await user.save();

    res
      .status(200)
      .json({ message: "Profile picture url : ", image: user.image });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "USER DELETED",deleteUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CHECK USER LOGIN
const getCurrentUser = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "User not logged" });
    }

    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    res.json({
      userId: user._id,
      email: user.email,
      name: user.name,
      image: user.image,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  registerUser,
  loginUser,
  logoutUser,
  editUserData,
  editProfilePicture,
  deleteUser,
  getCurrentUser,
  authMiddleware,
  adminMiddleware,
};
