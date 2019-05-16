const query = require('../database/mongodb.js');

exports.get = (req, res) => {
  query.findAllIn('users', {}, (err, results) => {
    res.json({ data: results });
  });
};
