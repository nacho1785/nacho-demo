import './App.css';
import React, {Component} from 'react';
import Clock from './components/Clock';

class App extends Component {
  render (){
  return (
    <div className="App-header">
      <Clock/>
    </div>
  );
}
}

export default App;