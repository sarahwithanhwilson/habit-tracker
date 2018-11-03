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
        <table>
          <tr>
            <th>Habit</th>
            <th>Completed</th>
            <th>Streak</th>
            <th> </th>
          </tr>
          {habits.map((habit) => {
            return (
              <Habit habit={habit} user={user} />
            );
          })}
        </table>


      </div>
    );
  }
};

export default HabitList;