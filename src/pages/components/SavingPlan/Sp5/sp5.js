import React, { Component } from 'react';
import './style.css'

class Sp5 extends Component {
  render() {
    return (
      <div className="wrap-sp5">
        <div className="navi-header">GOAL SUMMARY</div>
        <hr/>
        <div className="bg-red-savingPlan">
          You goal name is Vacation<br />
          Your amount to save is 5000<br />
          Your target date is 20 September 2019<br />
        </div>
      </div>
    )
  }
}

export default Sp5;