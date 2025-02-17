const express = require("express");
const multer = require("multer");
const router = express.Router();
const usersController = require("../controllers/UsersController");

const upload = multer({ dest: "uploads/" });


// READ
router.get(
  "/",
  usersController.authMiddleware,
  usersController.adminMiddleware,
  usersController.getUsers
);

// AUTH
router.post("/register", usersController.registerUser);
router.post("/login", usersController.loginUser);
router.post("/logout", usersController.logoutUser);

// EDIT
router.put(
  "/edit/data:id",
  usersController.authMiddleware,
  usersController.editUserData
);
router.put(
  "/edit/profile/picture/:id",
  usersController.authMiddleware,
  upload.single('file'),
  usersController.editProfilePicture
);

// DELETE
router.delete(
  "/:id/delete",
  usersController.authMiddleware,
  usersController.deleteUser
);

// check user logged
router.get(
  "/auth/me",
  usersController.authMiddleware,
  usersController.getCurrentUser
);

module.exports = router;
