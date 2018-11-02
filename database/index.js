require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize(`${process.env.DB_URL}`);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// SCHEMA
const User = sequelize.define('user', {
  name: {type: Sequelize.STRING},
  username: {type: Sequelize.STRING},
  password: {type: Sequelize.STRING},
});

const Habit = sequelize.define('habit', {
  // foreign key: userId
  name: {type: Sequelize.STRING},
});

const Activity = sequelize.define('activity', {
  // foreign key: habitId, userId
  notes: {type: Sequelize.STRING},
});

// RELATIONSHIPS
User.hasMany(Habit);
User.hasMany(Activity);

Habit.belongsTo(User);
Habit.hasMany(Activity);

Activity.belongsTo(Habit);
Activity.belongsTo(User)

// SYNC
sequelize.sync();

exports.User = User;
exports.Habit = Habit;
exports.Activity = Activity;