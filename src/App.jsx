import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div> hello world from App! </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));