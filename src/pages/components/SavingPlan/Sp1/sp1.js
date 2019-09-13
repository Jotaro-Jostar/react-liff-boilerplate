import React, { Component } from 'react';
import './style.css'

class Sp1 extends Component {
  render() {
    return (
      <div className="wrap-sp1">
        <div className="navi-header">CREATE NEW SAVING GOAL</div>
        <hr/>
        <div className="bg-red-savingPlan">You don't have your saving goal yet.</div>
      </div>
    )
  }
}

export default Sp1;