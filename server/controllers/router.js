const express = require('express');
const path = require('path');
const cards = require('./cards.js');
const authentication = require('./authentication');

const router = express.Router();

router.get('/getCards', cards.get);

router.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, '..', '..', 'client', 'dist', 'index.html')
  );
});

router.post('/signup', ({ body }, res) => {
  authentication.signup(body, res);
});

module.exports = router;
