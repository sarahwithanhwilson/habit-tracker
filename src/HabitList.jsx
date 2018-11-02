import React from 'react';
import Habit from './Habit.jsx';

class HabitList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { habits, user } = this.props;
    return (habits.length === 0) 
      ? (
        <div>Get started by adding a new habit!</div>
      )
      : (
      <div>
        <ul>
          {habits.map((habit) => {
            return (
              <li><Habit habit={habit} user={user} /></li>
            )
          })}
        </ul>
      </div>
    );
  }
};

export default HabitList;