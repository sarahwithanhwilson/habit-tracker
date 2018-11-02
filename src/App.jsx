import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import HabitList from './HabitList.jsx';

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

  editHabits() {
    // if clicked, show edit
  }

  render() {
    const { user, habits } = this.state;
    return (
      <div>
        <h1>Habit Tracker</h1>
        <button onClick={this.editHabits.bind(this)}>Edit Habits</button>
        <HabitList habits={habits} user={user} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));