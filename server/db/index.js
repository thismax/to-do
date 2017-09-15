const Sequelize = require('Sequelize');
const url = 'postgres://wazmibbz:n09eACFfFuaJXzQX6q34KknUqURA9QDp@tantor.db.elephantsql.com:5432/wazmibbz';
const orm = new Sequelize(url, {
  dialect: 'pg'
});

var User = orm.define(
  'User',
  {
    username:  Sequelize.STRING
  },
  {
    timestamps: false,
  }
);

var Todo = orm.define(
  'Todo',
  {
    todo: Sequelize.STRING,
    completed: Sequelize.BOOLEAN
  },
  {
    timestamps: false,
  }
);

User.hasMany(Todo, {foreignKey: {name: 'user_id', allowNull: false }, onDelete: 'CASCADE'});
Todo.belongsTo(User, {foreignKey: {name: 'user_id', allowNull: false }, onDelete: 'CASCADE'});

exports.User = User;
exports.Todo = Todo;