const database = require('../database/mongodb');

exports.post = (
  {
    username,
    bloodType,
    pValidAge,
    pHealthStatus,
    pRecentSurgery,
    pGetNotification,
  },
  res,
) => {
  const config = {
    bloodType,
    pValidAge,
    pHealthStatus,
    pRecentSurgery,
    pGetNotification,
  };
  database.findOneAndUpdateUser(username, { config }, (err, results) => {
    console.log('username', username);
    if (err) console.log(err);
    res.json({ results });
  });
};
