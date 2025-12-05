const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');
const auth = require('../middleware/auth');

// @route   GET api/students
// @desc    Get all students
// @access  Private
router.get('/', auth, studentController.getAllStudents);

// @route   GET api/students/:id
// @desc    Get student by ID
// @access  Private
router.get('/:id', auth, studentController.getStudentById);

module.exports = router;
