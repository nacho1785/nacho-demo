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
        <div>className="toggleButton"</div>
            < Switch onClick={this.toggleSwitch} />

      <Clock format={'HH:mm:ss'} ticking={true} timezone={''} />
    
    <div className='toggleDate'>
            {this.state.todaysDate ? moment().format('DD MM YYYY') : ''}
    </div>
    </div>
  );
}
}

export default Time;
