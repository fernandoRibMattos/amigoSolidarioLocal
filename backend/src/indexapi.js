const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

const baseDir = `${__dirname}/api/`;
app.use(express.static(`${baseDir}`));
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3335);