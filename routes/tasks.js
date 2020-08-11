const express = require('express');
const router = express.Router();
const taskController = require('../controllers/TaskController')

router.get('/paginate', taskController.paginate)
router.get('/find-many', taskController.findMany)
router.get('/:id', taskController.find)
router.get('/search', taskController.search)
router.get('/', taskController.all)
router.post('/', taskController.create)
router.put('/:id', taskController.update)
router.delete('/:id', taskController.delete)
module.exports = router;
