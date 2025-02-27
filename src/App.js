import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import SendMessage from './pages/SendMessage';
import LIFFWindow from './pages/LIFFWindow';
import Profile from './pages/Profile';
import AccountSummary from './pages/components/AccountSummary/accountSummary';
import SavingPlan from './pages/components/SavingPlan/savingPlan';
import MoneyTransfer from './pages/components/MoneyTransfer/moneyTransfer';
import Login from './pages/components/Login/login';

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <Header /> */}
        <Router>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/message" component={SendMessage} />
            <Route path="/window" component={LIFFWindow} />
            <Route path="/accountSummary" component={AccountSummary} />
            <Route path="/savingPlan" component={SavingPlan} />
            <Route path="/moneyTransfer" component={MoneyTransfer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
