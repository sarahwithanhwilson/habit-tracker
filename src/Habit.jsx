import React from 'react';
import axios from 'axios';

class Habit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      total: 0,
      streak: 0,
    }
  }

  componentDidMount() {
    this.getActivity();
  }

  getActivity() {
    const { habit } = this.props;
    axios.get(`/api/activities?habitId=${habit.id}`)
    .then((data) => {
      let activities = data.data;
      this.setState({ activities, total: activities.length }, () => {
        if (activities.length > 0) {
          this.getStreak(activities);
        }
      })
    })
    .catch((err) => console.log(err));
  }

  getStreak(activities) {
    // activities sorted by createdAt
    let streak = 0;;
    let lastDate = new Date();
    lastDate = lastDate.getDate();
    let lastActivity = new Date(activities[activities.length - 1].createdAt);
    lastActivity = lastActivity.getDate();

    if (lastDate - 1 ===  lastActivity) {
      lastDate = lastActivity;
    } else if (lastDate !== lastActivity) {
      return 0; // last activity was not today or yesterday
    }

    for (let i = activities.length - 1; i >= 0; i--) {
      let date = new Date(activities[i].createdAt);
      date = date.getDate();
      if (date === lastDate) {
        streak++;
        lastDate = date;
      } else {
        break;
      }
    }
    this.setState({ streak: streak });
  }

  addActivity() {
    const { habit, user } = this.props;
    const {total, streak } = this.state;
    this.setState({ total: total + 1, streak: streak + 1});

    axios.post('/api/activity', { habitId: habit.id, userId: user.id })
    .catch(err => console.log(err));
  }

  render() {
    const { habit } = this.props;
    const { total, streak } = this.state;
    return (
      <tr key={habit.id}>
        <td>{habit.name}</td>
        <td>{total}</td>
        <td>{streak}</td>
        <td><button onClick={() => this.addActivity()}>I did it!</button></td>
      </tr>
    );
  }
};

export default Habit;