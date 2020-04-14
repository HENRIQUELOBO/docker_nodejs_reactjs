'use strict';

const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');


const PORT = 4000;
const HOST = '0.0.0.0';


const app = express();

app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());
app.use(cors());

require('./Controllers/index')(app);


app.listen(PORT, HOST);
console.log('Server running of port 4000');