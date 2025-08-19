const express = require('express');
const router = express.Router();
const { createDataRequest, getDetailRequest, checkRandomNumber } = require('../controllers/dataRequestController');

// POST - Create
router.post('/', createDataRequest);
router.get('/detail-request/:id', getDetailRequest);
router.post('/panji-slot', checkRandomNumber);

module.exports = router;
