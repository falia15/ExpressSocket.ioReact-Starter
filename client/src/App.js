import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      io: io('http://localhost:5000'),
      test: 'coucou',
    };
  }

  componentDidMount(){
    //const { io } = this.state;
  }

  render() {
    return (
      <div className="App">
      hello
      {this.state.test}
      </div>
    );
  }
}

export default App;
