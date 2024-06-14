const express = require('express');
const { generateToken,validateToken,getTokensByMeterNumber } = require('../controller/tokenController');
const router = express.Router();

router.post('/tokens', generateToken);
router.post('/validate-token', validateToken);
router.get('/meter/:meter_number', getTokensByMeterNumber);

module.exports = router;
