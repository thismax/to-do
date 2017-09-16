const express = require('express');
const path = require('path');
const db = require('./db');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
//instatiate express server
const app = express();
//middleware
app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, '../static')));
app.use('/', routes);
app.use(cors())
//sync db before listening
if (!module.parent) {
  db.User.sync({force: true}).then(() => {
    db.Todo.sync({force: true}).then(() => {
      app.listen(3000, () => console.log('listening on port 3000'));
    });
  });
}