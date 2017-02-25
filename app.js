// [START app]
'use strict';

const express = require('express');
const app = express();
app.use(express.static('public'));

// Datastore
const Datastore = require('@google-cloud/datastore');
const datastore = Datastore();

function getYouth() {
    const query = datastore.createQuery('Youth').order('Birthday');

    return datastore.runQuery(query)
        .then((results) => {
            const youthList = results[0];
            console.log('Youth:');
            youthList.forEach((youth) => {
                console.log(youth);
            })

            return results;
        });
}

app.get('/', (req, res) => {
    getYouth();
    res.status(200).send('Got all the youth.');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
// [END app]
