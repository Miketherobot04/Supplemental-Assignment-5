const express = require('express');
const { getStaff, createStaff } = require('../controllers/staffController');
const router = express.Router();

router.get('/', getStaff);
router.post('/', createStaff);

module.exports = router;