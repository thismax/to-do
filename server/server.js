const express = require('express');
const path = require('path');
const db = require('./db');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
//instatiate express server
const app = express();
//middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, '../static')));
app.use('/', routes);
//sync db before listening
if (!module.parent) {
  db.Todo.sync().then(() => {
    app.listen(3000, () => console.log('listening on port 3000'));
  });
}

//force: true is a good optoin for sync - it wipes the tables