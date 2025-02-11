const express = require('express');
const router = express.Router();
const usersController = require('../controllers/UsersController');

// READ
router.get('/', usersController.getUsers);

// AUTH
router.post('/register', usersController.registerUser)
router.post('/login', usersController.loginUser)
router.post('/logout', usersController.logoutUser)

// EDIT
router.put('/edit/:id', usersController.editUser)

// DELETE
router.delete('/:id/delete', usersController.deleteUser)

// check user logged
router.get('/auth/me', usersController.getCurrentUser)

module.exports = router;