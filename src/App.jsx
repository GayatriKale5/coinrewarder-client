import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './component/landingPage/Landing.jsx';
import EarnFreePoints from './component/earnFreePoints/EarnFreePoints.jsx';
import DashboardPage from './component/dashboardPage/DashboardPage.jsx';
import Login from './component/Login.js';
import Profile from './component/Profile.js';
import Signup from './component/Signup.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/dashboard-page" component={DashboardPage} />
          <Route exact path="/earn-free-points" component={EarnFreePoints} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
