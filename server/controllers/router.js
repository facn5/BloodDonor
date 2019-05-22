const express = require('express');
const path = require('path');
const cards = require('./cards.js');
const insp = require('./inspCards.js');
const authentication = require('./authentication');
const userinfo = require('./profile');

const router = express.Router();

router.get('/getCards', cards.get);

router.get('/checkauth', (req, res) => {
  authentication.checkCookies(req, res);
});

router.get('/getInsp', insp.get);

router.get('/getProfile/:username', (req, res) => {
  userinfo.get(req, res);
});

router.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'),
  );
});

router.post('/signup', ({ body }, res) => {
  authentication.signup(body, res);
});

router.post('/signin', ({ body }, res) => {
  authentication.signin(body, res);
});


module.exports = router;
