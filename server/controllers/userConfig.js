const database = require('../database/mongodb');

exports.post = ({ user = 'qwre', bloodType, validAge, healthStatus, recentSurgery, getNotification }, res) => {
    let config = {
        "bloodType": bloodType,
        "validAge": validAge,
        "healthStatus": healthStatus,
        "recentSurgery": recentSurgery,
        "getNotification": getNotification,
    }
    database.findOneAndUpdateUser({ username: user }, { config }, (err, success) => {
        if (err) throw err;
        else {
            console.log(success);
        }
    })
};