import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
// Pages
import LoginPage from './screens/Login';
import HomePage from './screens/Home';
import AssetsPage from './screens/Assets';
import UsersPage from './screens/Users';
import UnitsPage from './screens/Units';
import CompaniesPage from './screens/Companies';
import UserPage from './screens/User';
import AssetPage from './screens/Asset';
import UnitPage from './screens/Unit';
import CompanyPage from './screens/Company';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/assets' component={AssetsPage} />
        <Route exact path='/users' component={UsersPage} />
        <Route exact path='/units' component={UnitsPage} />
        <Route exact path='/companies' component={CompaniesPage} />
        <Route path='/users/:id' component={UserPage} />
        <Route path='/assets/:id' component={AssetPage} />
        <Route path='/companies/:id' component={CompanyPage} />
        <Route path='/units/:id' component={UnitPage} />
      </Switch>
    </Router>
  )
}

export default App;