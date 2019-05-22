const { sign, verify } = require('jsonwebtoken');
const ppcookie = require('cookie');
const database = require('../database/mongodb');
const utils = require('../utils');
require('env2')('../config.env');

const { SECRET } = process.env;

exports.signup = ({ username, password, phoneNumber }, res) => {
  if (username && password && phoneNumber) {
    if (
      typeof username === 'string'
      && typeof password === 'string'
      && typeof phoneNumber === 'string'
    ) {
      if (
        phoneNumber.length === 10
        && password.length >= 6
        && username.length >= 3
      ) {
        database.findOneIn('users', { username }, (checkErr, result) => {
          if (checkErr) {
            res.json({
              success: false,
              result: 'Please try again later! db',
            });
            console.log(checkErr);
            return;
          }
          if (result === null || result === undefined) {
            utils.hash(password, (utilErr, hashedPassword) => {
              if (utilErr) {
                res.json({
                  result: 'Please try again later!',
                });
              } else {
                database.insertOneInto(
                  'users',
                  {
                    username,
                    password: hashedPassword,
                    phoneNumber,
                  },
                  (insertErr, success) => {
                    if (insertErr || !success) {
                      res.json({
                        success: false,
                        result: 'Please try again later! db1',
                      });
                    } else {
                      const userDetails = {
                        u$u: username,
                      };
                      const cookie = sign(userDetails, SECRET);

                      res.cookie('udetails', cookie, {
                        httpOnly: false,
                      });
                      res.json({
                        success: true,
                        result: 'Signed up successfully!',
                      });
                    }
                  },
                );
              }
            });
          } else res.json({ success: false, result: 'User already exists!' });
        });
      }
    }
  }
};

exports.signin = ({ username, password }, res) => {
  database.findOneIn('users', { username }, (findErr, result) => {
    if (findErr) {
      res.json({
        success: false,
        result: 'Please try again later!',
      });
    } else if (result === undefined || result === null) {
      res.json({
        success: false,
        result: "Username doesn't exist!",
      });
    } else {
      utils.compare(password, result.password, (utError, success) => {
        if (utError) {
          res.json({
            success: false,
            result: 'Please try again later!',
          });
        } else if (!success) {
          res.json({
            success: false,
            result: 'Username/password is invalid!',
          });
        } else {
          const userDetails = {
            u$u: username,
          };
          const cookie = sign(userDetails, SECRET);

          res.cookie('udetails', cookie, {
            httpOnly: false,
          });
          res.json({
            success: true,
            result: 'Logged in successfully!',
          });
        }
      });
    }
  });
};

exports.checkCookies = (req, res) => {
  if (!req.headers.cookie) res.json({ authenticated: false });
  else {
    let jwt;
    try {
      jwt = ppcookie.parse(req.headers.cookie);
    } catch (error) {
      res.json({ authenticated: false });
    }
    if (jwt) {
      verify(jwt.udetails, SECRET, (err, userCookie) => {
        if (err) res.json({ authenticated: false });
        else {
          const { u$u } = userCookie;

          database.findOneIn('users', { username: u$u }, (err, success) => {
            if (err || !success) res.json({ authenticated: false });
            else res.json({ authenticated: true });
          });
        }
      });
    }
  }
};
