const query = require('../database/mongodb.js');

exports.get = (req, res) => {
  query.findAllIn('inspirations', {}, (err, results) => {
    res.json({ data: results });
  });
};
