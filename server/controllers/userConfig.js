const database = require('../database/mongodb');

exports.post = (
    {
        user = 'yeye',
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
    database.findOneAndUpdateUser(user, { config }, (err, success) => {
        if (err) throw err;
    });
};
