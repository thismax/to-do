const Sequelize = require ('Sequelize');
const orm = new Sequelize('todos', 'root');

var User = orm.define(
  'User',
  {
    username:  Sequelize.STRING,
  },
  {
    timestamps: false,
  }
);

var Todo = orm.define(
  'Todo',
  {
    text: Sequelize.STRING,
    complelted: Sequelize.BOOLEAN,
  },
  {
    timestamps: false,
  }
);

User.hasMany(Todo);
Todo.belongsTo(User);

exports.User = User;
exports.Todo = Todo;