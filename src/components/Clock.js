import React, {Component} from 'react';
import Clock from 'react-live-clock';
import { Switch } from 'antd';
import moment from 'moment';
import "./Clock.css";

class Time extends Component {
    constructor(props){
        super(props)
        this.state={
            todaysDate: false
        }
    }

    toggleSwitch = () => {
        this.setState({
            todaysDate: !this.state.todaysDate
        })
    }

  render (){
  return (
    <div className="Time">
        <div className="navbar">
            Ignacio Chapperon
            < Switch onClick={this.toggleSwitch} className="toggle" />
        </div>

      <Clock format={'HH:mm:ss'} ticking={true} timezone={''} />
    
    <div className='toggleDate'>
            {this.state.todaysDate ? moment().format('MMMM Do YYYY') : ''}
    </div>
    </div>
  );
}
}

export default Time;
