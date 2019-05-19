const { sign, verify } = require('jsonwebtoken');
const database = require('../database/mongodb');
const utils = require('../utils');
const SECRET = 'poiugyfguhijokpkoihugyfyguhijo';

exports.signup = (body, res) => {
  database.findOneIn(
    'users',
    { username: body.username },
    (checkErr, result) => {
      if (checkErr) {
        res.json({ success: false, result: 'Please try again later!' });
      }
      if (result == null) {
        utils.hash(body.password, (uTerr, hashedPassword) => {
          if (uTerr) {
            res.json({ success: false, result: 'Please try again later!' });
          } else {
            database.insertOneInto(
              'users',
              {
                username: body.username,
                password: hashedPassword,
                phoneNumber: body.phoneNumber
              },
              (insertErr, success) => {
                if (insertErr || !success) {
                  res.json({
                    success: false,
                    result: 'Please try again later!'
                  });
                } else {
                  const userDetails = { username: body.user, logged_in: true };
                  const cookie = sign(userDetails, SECRET);

                  res.cookie('jwt', cookie, {
                    httpOnly: true
                  });
                  res.json({
                    success: true,
                    result: 'Signed up successfully!'
                  });
                }
              }
            );
          }
        });
      } else res.json({ success: false, result: 'User already exists!' });
    }
  );
};
