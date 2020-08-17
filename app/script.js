import React from 'react';
import { render } from 'react-dom';
const { AppDescription } = require('./AppDescription');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'off',
      time,
      timer: null,
    };
  }

  render() {
    
    return (
      <div>
        <h1>Protect your eyes</h1>
        <AppDescription />
        <img src="./images/work.png" />
        <img src="./images/rest.png" />
        <div className="timer">
          18:23
        </div>
        <button className="btn">Start</button>
        <button className="btn">Stop</button>
        <button className="btn btn-close">X</button>
      </div>
    )
  }
};

render(<App />, document.querySelector('#app'));
