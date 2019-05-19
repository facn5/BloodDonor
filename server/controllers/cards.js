const query = require('../database/mongodb.js');

exports.get = (req, res) => {
  query.findAllIn('cards', {}, (err, results) => {
    res.json({ data: results });
  });
};
