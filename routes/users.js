const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController')

router.get('/', userController.getAllUsers)
router.delete('/:id', userController.deleteUser)
router.post('/', userController.createUser)
router.put('/:id', userController.updateUser)

module.exports = router;
