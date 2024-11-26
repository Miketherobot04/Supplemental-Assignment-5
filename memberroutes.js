const express = require('express');
const { getMembers, createMember } = require('../controllers/membersController');
const router = express.Router();

router.get('/', getMembers);
router.post('/', createMember);

module.exports = router;