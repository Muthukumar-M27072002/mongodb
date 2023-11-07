const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);


client.connect((err) => {
  if (err) {
    console.error('Error ', err);
    return;
  }
  console.log('Connected successfully to the server');
  client.close();
});
