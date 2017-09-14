const express = require('express');
const parser = require('body-parser');
const path = require('path');
const router = require('express').Router();
const app = express();
app.use(parser.json());
app.use('/', express.static(path.resolve(__dirname, '../public')));
app.get('/')
app.listen(3000, ()=> console.log('listening on port 3000'));