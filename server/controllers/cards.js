const query = require('../database/mongodb.js');

exports.get = (req, res) => {
  console.log('inside get');
  query.findAllIn('users', {}, (err, results) => {
    console.log('asaa', results);
    res.json({ oo: results });
  });
};
