'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
const name = 'carlos';
// App
const app = express();
app.get('/', (req, res) => {
  res.send(`hola ${name} Como estas ? sos un capo ${name}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

