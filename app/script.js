import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'work',
      time: 60,
      timer: null,
    };
  }

  formatTime(time) {
    const minutes = Math.floor(time / 60).toString();
    const seconds = (time % 60).toString();
    
    const formatedTime = `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;

    return formatedTime;
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
        ? <button className="btn">Start</button>
        : ''
        }

        {this.state.status !== 'off'
        ? <button className="btn">Stop</button>
        : ''
        }
        
        <button className="btn btn-close">X</button>
      </div>
    )
  }
};

render(<App />, document.querySelector('#app'));
