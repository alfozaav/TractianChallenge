import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
// Pages
import LoginPage from './screens/Login';
import HomePage from './screens/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App;