const express = require('express');
const path = require('path');
const cards = require('./cards.js');


const router = express.Router();

router.get('/getCards', cards.get);

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
});


module.exports = router;
