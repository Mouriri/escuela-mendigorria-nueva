const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth.routes'));
router.use('/students', require('./student.routes'));
// router.use('/teachers', require('./teacher.routes'));
// router.use('/activities', require('./activity.routes'));

module.exports = router;
