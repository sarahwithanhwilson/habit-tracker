const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(__dirname + '/dist'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));