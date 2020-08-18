import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'off',
      time: null,
      timer: null,
    };
  }

  formatTime(time) {
    const minutes = Math.floor(time / 60).toString();
    const seconds = (time % 60).toString();
    
    const formatedTime = `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;

    return formatedTime;
  }

  playBell() {
    const bell = new Audio('./sounds/bell.wav');
    bell.play();
  }

  step() {
    const time = this.state.time;
    const status = this.state.status;
    this.setState({
      time: time - 1,
    });

    if (time === 0 && status === 'work') {
      this.playBell();
      this.setState({
        status: 'rest',
        time: 20,
      });
    }

    if (time === 0 && status === 'rest') {
      this.playBell();
      this.setState({
        status: 'work',
        time: 1200,
      })
    }
  }

  startTimer() {
    const interval = setInterval(() => this.step(), 1000);
    this.setState({
      status: 'work',
      time: 10,
      timer: interval,
    });
  }

  stopTimer() {
    const interval = this.state.timer;
    this.setState({
      status: 'off',
      time: null,
      timer: clearInterval(interval),
    });
  }

  closeApp() {
    window.close();
  }

  render() {
    
    return (
      <div>
        <h1>Protect your eyes</h1>

        {this.state.status === 'off'
        ?
        <div>
            <p>According to optometrists in order to save your eyes, you should follow the 20/20/20. It means you should to rest your eyes every 20 minutes for 20 seconds by looking more than 20 feet away.</p>
            <p>This app will help you track your time and inform you when it's time to rest.</p>
        </div>
        : ''
        }
        
        {this.state.status === 'work'
        ? <img src="./images/work.png" />
        : ''
        }
        
        {this.state.status === 'rest'
        ? <img src="./images/rest.png" />
        : ''
        }
        
        {this.state.status !== 'off'
        ?
        <div className="timer">
          {this.formatTime(this.state.time)}
        </div>
        : ''
        }
        
        {this.state.status === 'off'
        ? <button className="btn" onClick={() => this.startTimer()}>Start</button>
        : ''
        }

        {this.state.status !== 'off'
        ? <button className="btn" onClick={() => this.stopTimer()}>Stop</button>
        : ''
        }
        
        <button className="btn btn-close" onClick={() => this.closeApp()}>X</button>
      </div>
    )
  }
};

render(<App />, document.querySelector('#app'));
