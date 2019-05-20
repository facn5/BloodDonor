const { sign, verify } = require("jsonwebtoken");
const database = require("../database/mongodb");
const utils = require("../utils");
const ppcookie = require("cookie");
const { SECRET } = require("../../keys_dev");

exports.signup = ({ username, password, phoneNumber }, res) => {
  if (username && password && phoneNumber) {
    if (
      username instanceof String &&
      password instanceof String &&
      phoneNumber instanceof String
    ) {
      if (
        phoneNumber.length === 10 &&
        password.length >= 6 &&
        username.length >= 3 &&
        /\d/.test(phoneNumber)
      ) {
        database.findOneIn("users", { username }, (checkErr, result) => {
          if (checkErr) {
            res.json({ success: false, result: "Please try again later!" });
          }
          if (result == null) {
            utils.hash(password, (utilErr, hashedPassword) => {
              if (utilErr) {
                res.json({ success: false, result: "Please try again later!" });
              } else {
                database.insertOneInto(
                  "users",
                  {
                    username,
                    password: hashedPassword,
                    phoneNumber
                  },
                  (insertErr, success) => {
                    if (insertErr || !success) {
                      res.json({
                        success: false,
                        result: "Please try again later!"
                      });
                    } else {
                      const userDetails = {
                        username
                      };
                      const cookie = sign(userDetails, SECRET);

                      res.cookie("jwt", cookie, {
                        httpOnly: true
                      });
                      res.json({
                        success: true,
                        result: "Signed up successfully!"
                      });
                    }
                  }
                );
              }
            });
          } else res.json({ success: false, result: "User already exists!" });
        });
      }
    }
  }
};

exports.signin = ({ username, password }, res) => {
  database.findOneIn("users", { username }, (findErr, result) => {
    if (findErr) {
      res.json({
        success: false,
        result: "Please try again later!"
      });
    } else if (result === null) {
      res.json({
        success: false,
        result: "Username doesn't exist!"
      });
    } else {
      utils.compare(password, result.password, (utError, success) => {
        if (utError) {
          res.json({
            success: false,
            result: "Please try again later!"
          });
        } else if (!success) {
          res.json({
            success: false,
            result: "Username/password is invalid!"
          });
        } else {
          const userDetails = {
            u$u: username
          };
          const cookie = sign(userDetails, SECRET);

          res.cookie("udetails", cookie, {
            httpOnly: true
          });
          res.json({
            success: true,
            result: "Logged in successfully!"
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
      verify(jwt.udetails, process.env.SECRET, (err, userCookie) => {
        if (err) res.json({ authenticated: false });

        const { u$u } = userCookie;

        database.findOneIn("users", { username: u$u }, (err, success) => {
          if (err || !success) res.json({ authenticated: false });
          else res.json({ authenticated: true });
        });
      });
    }
  }
};
