const { MongoClient } = require('mongodb');
const { mongoURI } = require('../../keys_dev');

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

const findOneAndUpdateUser = (user, query, cb) => {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true });
  client.connect((err) => {
    if (err) throw err;
    const db = client.db('bloodonor');
    db.collection('users').findOneAndUpdate(user, { $set: { query } }, (error, result) => {
      if (error) cb(error);
      cb(null, result);
    });
    client.close();
  });
};

// eslint-disable-next-line no-unused-vars
const findOneIn = (colName, query, cb) => {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true });
  client.connect((err) => {
    if (err) throw err;
    const col = client.db('blooddonor');
    col.collection(colName).findOne(query, (error, res) => {
      if (error) cb(error);
      cb(null, res);
    });
    client.close();
  });
};

// eslint-disable-next-line no-unused-vars
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

const url = 'https://www.google.com/maps/embed?pb=';
const card = {
  stationName: 'Wolfson Medical Center',
  location: 'Holon',
  bloodType: 'O-',
  status: 'Critical',
  street: 'Ha-Lokhamim St 62',
  contact: '03-502-8111',
  openHours: '8AM - 12AM',
  mapSrc: `${url}!1m18!1m12!1m3!1d214543.62155329392!2d35.27562295560184!3d32.838788370051596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dce702593ec2d%3A0x9f0d03dba0a49fdd!2sGalilee+Medical+Center!5e0!3m2!1sen!2sil!4v1558107992086!5m2!1sen!2sil`,
};

// insertOneInto('cards', { card }, (res) => {
//   console.log(res);
// });

// eslint-disable-next-line no-unused-vars
const deleteOneFrom = (colName, obj, cb) => {
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
  findOneIn,
  insertOneInto,
  findOneAndUpdateUser,
};
