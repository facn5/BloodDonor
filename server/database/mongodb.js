const { MongoClient } = require('mongodb');
const { mongoURI } = require('../../keys_dev');

// find all in a colletion
const findAllIn = (colName, query, cb) => {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true });
  client.connect((err) => {
    if (err) throw err;
    const db = client.db('blooddonor');
    db.collection(colName)
      .find(query)
      .toArray((error, result) => {
        if (error)cb(error);
        cb(null, result);
      });
    client.close();
  });
};

// findAllIn('users', { name: 'majd' });

// find one in a colletion
const findOneIn = (colName, query) => {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true });
  client.connect((err) => {
    if (err) throw err;
    const col = client.db('blooddonor');
    col.collection(colName).findOne(query, (error, res) => {
      if (error) console.log(error);
      console.log(res);
    });
    client.close();
  });
};

// findOneIn('users', { name: 'majd' });

// insert one into a colliction
const insertOneInto = (colName, obj) => {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true });
  client.connect((err) => {
    if (err) throw err;
    const db = client.db('blooddonor');
    db.collection(colName).insertOne(obj, (erro) => {
      if (err) throw erro;
      console.log('1 document inserted');
    });
    client.close();
  });
};

// insertOneInto('users', { name: 'majd' });

// delete one into a colliction
const deleteOneFrom = (colName, obj) => {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true });
  client.connect((err) => {
    if (err) throw err;
    const db = client.db('blooddonor');
    db.collection(colName).deleteOne(obj, (erro) => {
      if (err) throw erro;
      console.log('1 document deleted');
    });
    client.close();
  });
};

module.exports = {
  findAllIn,
};
// deleteOneFrom('users', { name: 'majd' });
