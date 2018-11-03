import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import HabitList from './HabitList.jsx';
import css from './style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {id: 1, name: 'Anonymous', username: 'user', password: 'pass'},
      // habits: [ {id: 1, userId: 1, name: 'workout'}, {id: 2, userId: 1, name: 'read'}, {id: 3, userId: 1, name: 'call mom'} ],
      habits: [],
      showEdit: false,
    }
  }

  componentDidMount() {
    this.getHabits();
  }

  getHabits() {
    const { user } = this.state;
    axios.get(`/api/habits?userId=${user.id}`)
    .then((data) => {
      this.setState({habits: data.data});
    })
    .catch((err) => console.log(err));
  }

  handleAddNewHabit() {
    // axios.post('/api/habit', {})
  }

  render() {
    const { user, habits } = this.state;
    return (
      <div>
        <div className="grid-top">
          <h1 id="logo">Habit Tracker</h1>
        </div>
        <div className="grid-body">
          <HabitList habits={habits} user={user} />
          <br />
          <br />
          <button onClick={this.handleAddNewHabit.bind(this)} className="new-habit">Add New Habit</button>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));