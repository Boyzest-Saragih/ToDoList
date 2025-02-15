const express = require("express");
const router = express.Router();
const usersController = require("../controllers/UsersController");

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
  "/edit/:id",
  usersController.authMiddleware,
  usersController.editUser
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
