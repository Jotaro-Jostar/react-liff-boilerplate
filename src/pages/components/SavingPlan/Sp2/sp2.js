import React, { Component } from 'react';
import './style.css'

class Sp2 extends Component {
  render() {
    return (
      <div className="wrap-sp1">
        <div className="navi-header">SET GOAL NAME</div>
        <hr/>
        <div>
          <input className='sp2_savingPlanInput' placeholder="Set goal name here"></input>
        </div>
      </div>
    )
  }
}

export default Sp2;