const path = require("path");

exports.client = (req, res) => {
  res.send('404 error page not found');
};

exports.server = (err, req, res, next) => {
  res.send('Server error 500');

};