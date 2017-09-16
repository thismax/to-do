var db = require('../db');

module.exports = {

  todos: {

    get: function(req, res) {
      db.Todo.findAll({order: [['id', 'ASC']]})
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
    },

    put: function(req, res) {
      let id = req.body.id;
      let completed = !req.body.completed;
      db.Todo.update(
        { completed },
        { where: {id} })
      .then((todo) => {
        res.send()
      })
      .catch((err)=> {
        console.log(err);
      })
    },

    delete: function(req, res) {
      let id = req.body.id;
      db.Todo.destroy(
        {where: {id}})
      .then((success) => {
        res.send();
      })
      .catch((err)=> {
        console.log(err);
      })
    }

  }

};