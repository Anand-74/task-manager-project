const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middlewares/auth');
const {
  getMyTasks,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

router.use(protect);

router.route('/')
  .get(getMyTasks)
  .post(createTask);

router.route('/admin')
  .get(admin, getAllTasks);

router.route('/:id')
  .patch(updateTask)
  .delete(deleteTask);

module.exports = router;