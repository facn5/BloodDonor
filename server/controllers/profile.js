const query = require('../database/mongodb.js');

exports.get = (req, res) => {
  query.findOneIn('users', { username: req.params.username }, (err, results) => {
    res.json({ data: results });
  });
};
