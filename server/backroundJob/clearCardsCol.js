const cron = require('node-cron');
const query = require('../database/mongodb.js');
const utils = require('../utils.js');

// this job triggers every 12h to clean the expired cards and move them to expired collection
const expiredCardsCleaner = () => {
  cron.schedule('12  * * * *', () => {
    query.findAllIn('cards', { expDate: { $exists: true } }, (err, res) => {
      if (err) return err;

      const validCards = [];
      const expiredCards = [];

      res.map((card) => {
        if (utils.isValid(card.expDate)) {
          validCards.push(card);
        } else expiredCards.push(card);
        return 'test';
      });

      validCards.map(c => query.insertOneInto('cards', c, (error, result) => {
          if (error) return error;
          return result;
        }),);

      expiredCards.map((c) => {
        query.insertOneInto('expiedCards', c, (error, result) => {
          if (error) return error;
          return result;
        });
        query.deleteOneFrom('cards', c, (error, result) => {
          if (error) return error;
          return result;
        });
      });
    });
  });
};
module.exports = {
  expiredCardsCleaner,
};
