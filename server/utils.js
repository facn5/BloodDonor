const bcrypt = require('bcryptjs');
const crypto = require('crypto');
require('env2')('../config.env');

const { SECRET } = process.env;

const hashPassword = (password, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) callback(null);
      else callback(null, hash);
    });
  });
};

const functions = {
  sign: value => crypto
    .createHmac('sha256', SECRET)
    .update(value)
    .digest('hex'),
  validate: (value, hash) => {
    const correctHash = functions.sign(value);
    return correctHash === hash;
  },
};

const comparePasswords = (password, hashedPassword, callback) => {
  bcrypt.compare(password, hashedPassword, callback);
};

// This function compares the date of the card from db with current date
function isValid(dbDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const yyyy = String(today.getFullYear());
  const mm = String(today.getMonth());
  const dd = String(today.getDate());
  if (parseInt(dbDate.split('/')[2], 10) > parseInt(yyyy, 10)) {
    return true;
  }
  if ((dbDate.split('/')[2], 10) === parseInt(yyyy, 10)) {
    if (parseInt(dbDate.split('/')[1], 10) > parseInt(mm, 10)) {
      return true;
    }
    if (parseInt(dbDate.split('/')[0], 10) > parseInt(dd, 10)) return true;
  }
  return false;
}

module.exports = {
  hash: hashPassword,
  functions,
  compare: comparePasswords,
  isValid,
};
