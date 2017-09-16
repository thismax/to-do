var db = require('../db');

module.exports = {

  todos: {

    get: function(req, res) {
      db.Todo.findAll()
      .then((todos)=>{
        res.send(todos);
      });
    },

    post: function(req, res) {

      db.Todo.create({
        todo: req.body.todo,
        completed: req.body.completed})
      .then((newTodo) => {
        res.status(200).json(newTodo.id);})
      .catch((err) => {
        console.log(err);
      })

    }

  }

};