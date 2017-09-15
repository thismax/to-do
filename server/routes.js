const router = require('express').Router();
const controller = require('./controller');

router.post('/todos', controller.todos.post);
router.get('/todos', controller.todos.get);

module.exports = router;