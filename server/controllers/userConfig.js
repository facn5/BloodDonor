const database = require('../database/mongodb');

exports.post = (
  {
    user = 'jjj',
    bloodType,
    validAge,
    healthStatus,
    recentSurgery,
    getNotification,
  },
  res,
) => {
  const config = {
    bloodType,
    validAge,
    healthStatus,
    recentSurgery,
    getNotification,
  };
  database.findOneAndUpdateUser(user, { config }, (err, success) => {
    if (err) throw err;
    else {
      console.log('stam');
    }
  });
};
