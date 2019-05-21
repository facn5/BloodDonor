const query = require('../database/mongodb.js');

exports.get = (req, res) => {
  query.findOneIn('users', { username: req.params.username }, (err, results) => {
    delete results.password;
    res.json({ data: results });
  });
};
