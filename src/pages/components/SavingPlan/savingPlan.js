import React, { Component } from 'react';
import Sp1 from './Sp1/sp1'
import Sp2 from './Sp2/sp2'
import Sp3 from './Sp3/sp3'
import Sp4 from './Sp4/sp4'
import Sp5 from './Sp5/sp5'
import Sp6 from './Sp6/sp6'
import Sp7 from './Sp7/sp7'
import Sp8 from './Sp8/sp8'
import Sp9 from './Sp9/sp9'
import Sp10 from './Sp10/sp10'
import Sp11 from './Sp11/sp11'
import './style.css'

class SavingPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentRender: 'sp1',
      goalName: '',
      goalAmount: 0,
    }
  }

  render() {
    let backStep = 'sp1';
    let nextStep = 'sp2';
    let buttonDisp1 = "Next";
    let buttonDisp2 = "Back";
    const renderComponent = () => {
      if (this.state.componentRender === 'sp1') {
        backStep = 'sp1';
        nextStep = 'sp2';
        buttonDisp1 = "Next";
      } else if (this.state.componentRender === 'sp2') {
        backStep = 'sp1';
        nextStep = 'sp3';
        buttonDisp1 = "Next";
      }
      else if (this.state.componentRender === 'sp3') {
        backStep = 'sp2';
        nextStep = 'sp4';
        buttonDisp1 = "Next";
      }
      else if (this.state.componentRender === 'sp4') {
        backStep = 'sp3';
        nextStep = 'sp5';
        buttonDisp1 = "Next";
      }
      else if (this.state.componentRender === 'sp5') {
        backStep = 'sp4';
        nextStep = 'sp6';
        buttonDisp1 = "Create Goal";
      }
      else if (this.state.componentRender === 'sp6') {
        backStep = 'sp5';
        nextStep = 'sp7';
      }
      else if (this.state.componentRender === 'sp7') {
        backStep = 'sp6';
        nextStep = 'sp8';
      }
      else if (this.state.componentRender === 'sp8') {
        backStep = 'sp7';
        nextStep = 'sp9';
      }
      else if (this.state.componentRender === 'sp9') {
        backStep = 'sp8';
        nextStep = 'sp10';
      }
      else if (this.state.componentRender === 'sp10') {
        backStep = 'sp9';
        nextStep = 'sp11';
      }
      else if (this.state.componentRender === 'sp11') {
        backStep = 'sp10';
        nextStep = 'sp1';
      }
      switch (this.state.componentRender) {
        case 'sp1':
          return <Sp1 />;
        case 'sp2':
          return <Sp2 />;
        case 'sp3':
          return <Sp3 />;
        case 'sp4':
          return <Sp4 />;
        case 'sp5':
          return <Sp5 />;
        case 'sp6':
          return <Sp6 />;
        case 'sp7':
          return <Sp7 />;
        case 'sp8':
          return <Sp8 />;
        case 'sp9':
          return <Sp9 />;
        case 'sp10':
          return <Sp10 />;
        case 'sp11':
          return <Sp11 />;
        default:
          return <Sp1 />;
      }
    }

    const renderButton = () => {
      switch (this.state.componentRender) {
        case 'sp2':
        case 'sp3':
        case 'sp4': 
        case 'sp5':
        case 'sp9': 
        case 'sp10':
          return (
            <div className="footer">
              <button className="sp1_button" onClick={() => gotoStep(nextStep)}>{buttonDisp1}</button>
              <button className="sp1_button" onClick={() => gotoStep(backStep)}>{buttonDisp2}</button>
            </div>
          )
        case 'sp1':
        case 'sp6': 
        case 'sp7':
          return (
            <div className="footer">
              <button className="sp1_button" onClick={() => gotoStep(nextStep)}>{buttonDisp1}</button>
            </div>
          )
        case 'sp8':
        case 'sp11':
          return (
          <div className="footer">
            <button className="sp1_button" onClick={() => gotoStep(nextStep)}>{buttonDisp1}</button>
            <button className="sp1_button" onClick={() => gotoStep(backStep)}>{buttonDisp2}</button>
            <button className="sp1_button" onClick={() => gotoStep(backStep)}>{buttonDisp2}</button>
          </div>
          )
        default:
          return (
            <div className="footer">
              <button className="sp1_button" onClick={() => gotoStep(nextStep)}>{buttonDisp1}</button>
              <button className="sp1_button" onClick={() => gotoStep(backStep)}>{buttonDisp2}</button>
            </div>
          );
      }
    }
    const gotoStep = step => {
      this.setState({ componentRender: step });
    }

    return (
      <div>
        <div className="topic-header">SAVING PLAN</div>
        <div className="saving-plan">
          <div className="col-lg-6">
            {renderComponent()}
          </div>
        </div>
        {renderButton()}
      </div>
    );
  }
}

export default SavingPlan;