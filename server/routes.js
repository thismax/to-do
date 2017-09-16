const router = require('express').Router();
const controller = require('./controller');

router.post('/todos', controller.todos.post);
router.get('/todos', controller.todos.get);
router.put('/todos', controller.todos.put);
router.delete('/todos', controller.todos.delete);

module.exports = router;