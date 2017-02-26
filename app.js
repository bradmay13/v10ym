// [START app]
'use strict';

const express = require('express');
const app = module.exports = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname+'/about.html'));
});

require('./api');

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
// [END app]
