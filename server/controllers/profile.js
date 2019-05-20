const query = require('../database/mongodb.js');

exports.get = (req, res) => {
  query.findOneIn('users', { username: 'Admin' }, (err, results) => {
    res.json({ data: results });
  });
};
