const { MongoClient } = require('mongodb');
const { mongoURI } = require('../../key_dev');

// find all in a colletion
// eslint-disable-next-line no-unused-vars
const findAllIn = (colName, query, cb) => {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true });
  client.connect((err) => {
    if (err) throw err;
    const db = client.db('blooddonor');
    db.collection(colName)
      .find(query)
      .toArray((error, result) => {
        if (error) cb(error);
        cb(null, result);
      });
    client.close();
  });
};

// find one in a colletion
// eslint-disable-next-line no-unused-vars
const findOneIn = (colName, query, cb) => {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true });
  client.connect((err) => {
    if (err) throw err;
    const col = client.db('blooddonor');
    col.collection(colName).findOne(query, (error, res) => {
      if (error) cb(error);
      cb(res);
    });
    client.close();
  });
};

// insert one into a colliction
const insertOneInto = (colName, obj, cb) => {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true });
  client.connect((err) => {
    if (err) throw err;
    const db = client.db('blooddonor');
    db.collection(colName).insertOne(obj, (error) => {
      if (error) cb(error);
      cb(null, '1 document inserted');
    });
    client.close();
  });
};

const card = {
  stationName: 'Rambam',
  location: 'Haifa',
  bloodType: 'A+',
  status: 'Critical',
  street: 's1231',
  contact: '0526536395',
  openHours: '11AM - 4PM',
  mapSrc:
    'https://maps.google.com/maps?q=rambam&t=&z=13&ie=UTF8&iwloc=&output=embed',
};

// insertOneInto('cards', { card }, (res) => {
//   console.log(res);
// });

// delete one into a colliction
// eslint-disable-next-line no-unused-vars
const deleteOneFrom = (colName, obj, cb) => {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true });
  client.connect((err) => {
    if (err) throw err;
    const db = client.db('blooddonor');
    db.collection(colName).deleteOne(obj, (error) => {
      if (error) cb(error);
      cb(null, '1 Record have been deleted');
    });
    client.close();
  });
};

module.exports = {
  findAllIn,
};
