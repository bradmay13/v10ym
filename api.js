const app = require('./app');

// Datastore
const Datastore = require('@google-cloud/datastore');
const datastore = Datastore();

app.get('/api/getYouth', (req, res) => {
  const query = datastore.createQuery('Youth').order('Birthday');
  datastore.runQuery(query)
    .then((results) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(results[0]));
    });
});
