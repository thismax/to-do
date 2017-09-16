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

      db.User.findOrCreate({
        where: {
          username: req.body.username
        },
        defaults: {
          id: 1
        }
      }).spread( (user, created) => {
        return db.Todo.create({
          user_id: user.dataValues.id,
          todo: req.body.todo,
          completed: req.body.completed
        });
      })
      .then((newTodo) => {
        res.status(200).json(newTodo.id);
      }).catch((err) => {
        console.log(err);
      })

    }

  }

};