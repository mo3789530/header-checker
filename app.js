const express = require('express');
const app = express();

app.listen('3000', () => {
    console.log('listen');
});

const api = require('./api');

app.use('/header', api);

module.exports = app;
