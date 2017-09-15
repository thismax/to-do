const express = require('express');
const path = require('path');
const router = require('express').Router();
const db = require('./db');
//instatiate express server
const app = express();
//server client files
app.use('/', express.static(path.resolve(__dirname, '../public')));
//sync db before listening
if (!module.parent) {
  db.User.sync().then(() => {
    db.Todo.sync().then(() => {
      app.listen(3000, () => console.log('listening on port 3000'));
    });
  });
}