//  Imports
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Pages
import LoginPage from './screens/Login';
import HomePage from './screens/Home';
import AssetPage from './screens/Asset';
import AssetsPage from './screens/Assets';
import EditAsset from './screens/EditAsset';
import UserPage from './screens/User';
import UsersPage from './screens/Users';
import EditUser from './screens/EditUser';
import UnitPage from './screens/Unit';
import UnitsPage from './screens/Units';
import EditUnit from './screens/EditUnit';
import CompanyPage from './screens/Company';
import CompaniesPage from './screens/Companies';
import EditCompany from './screens/EditCompany';
//  Error Page
import ErrorPage from './screens/404Page';
//  General Styles
import './styles/App.css';

const App = () => {

//  Routes Managment
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/assets' element={<AssetsPage/>} />
          <Route path='/assets/:id' element={<AssetPage />} />
          <Route path='/assets/edit/:id' element={<EditAsset />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/:id' element={<UserPage />} />
          <Route path='/users/edit/:id' element={<EditUser />} />
          <Route path='/units' element={<UnitsPage />} />
          <Route path='/units/:id' element={<UnitPage />} />
          <Route path='/units/edit/:id' element={<EditUnit />} />
          <Route path='/companies' element={<CompaniesPage />} />
          <Route path='/companies/:id' element={<CompanyPage />} />
          <Route path='/companies/edit/:id' element={<EditCompany />} />
          <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;