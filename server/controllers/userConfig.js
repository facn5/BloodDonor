const database = require('../database/mongodb');

exports.post = (
  obj,
  res,
) => {
  const config = {
    bloodType: obj.bloodType,
    pValidAge: obj.validAge || obj.pValidAge,
    pHealthStatus: obj.goodHealth || obj.pHealthStatus,
    pRecentSurgery: obj.recentSurgery || obj.pRecentSurgery,
    pGetNotification: obj.notification || obj.pGetNotification,
  };
  database.findOneAndUpdateUser(obj.username, { config }, (err, results) => {
    console.log('username', obj.username);
    if (err) console.log(err);
    res.json({ results });
  });
};
