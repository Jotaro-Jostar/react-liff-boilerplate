import React, { Component } from 'react';
import './style.css'

class Sp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentRender: 'sp2',
      goalName: '',
      goalAmount: 0,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({goalName: event.target.value});
    console.log(this.state.goalName);
  }

  render() {
    return (
      <div className="wrap-sp1">
        <div className="navi-header">SET GOAL NAME</div>
        <hr />
        <div>
          <input className='sp2_savingPlanInput' placeholder="Set your goal name here."></input>
          </div>
      </div>
    )
  }
}

export default Sp2;