import React from 'react';

class Habit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streak: 0,
      total: 0,
    }
  }

  getHabitStats() {
    //axios request for instances with this habit id
      // get streak
      // get total instances
  }

  render() {
    const { habit } = this.props;
    return (
      <div key={habit.id}>
        {habit.name}
      </div>
    );
  }
};

export default Habit;