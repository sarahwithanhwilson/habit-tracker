const express = require('express');
const path = require('path');
const port = 3000;
const db = require('./database/index.js');
const bodyParser = require('body-parser')

const app = express();

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* ****** Users ***** */
app.get('/api/user', (req, res) => {
  let username = req.query.username;
  db.User.findOne({ username: username })
  .then((data) => res.send(data))
  .catch((err) => console.log(err));
});

app.post('/api/user', (req, res) => {
  let user = req.body;
  db.User.create(user)
  .then((data) => res.send(data))
  .catch((err) => console.log(err));
});

/* ****** Habits ***** */
app.get('/api/habits', (req, res) => {
  console.log('server get habits')
  let userId = req.query.userId;
  db.Habit.findAll({where: {userId: userId}})
  .then((data) => res.send(data))
  .catch((err) => console.log(err));
});

app.post('/api/habit', (req, res) => {
  // req.body = { id, userId, name }
  db.Habit.create(req.body)
  .then((data) => res.send(data))
  .catch((err) => console.log(err));
});

/* ****** Activity ***** */
app.get('/api/activities', (req, res) => {
  let habitId = req.query.habitId;
  db.Activity.findAll({where: {habitId: habitId}})
  .then((data) => res.send(data))
  .catch((err) => console.log(err));
});

app.post('/api/activity', (req, res) => {
  // req.body = { id, userId, habitId, notes }
  db.Activity.create(req.body)
  .then((data) => res.send(data))
  .catch((err) => console.log(err));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));