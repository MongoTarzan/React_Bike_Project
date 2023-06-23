import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import GearAndShoewear from './components/gear-and-shoewear';
import LegalTips from './components/legal-tips';
import DrivingTips from './components/driving-tips';
import BuyingAndDealers from './components/buying-and-dealers';

function BikeRoutes() {
  return (
    <Routes>
        <Route exact path="/" component={App} />
        <Route path="/gear-and-shoewear" component={GearAndShoewear} />
        <Route path="/legal-tips" component={LegalTips} />
        <Route path="/driving-tips" component={DrivingTips} />
        <Route path="/buying-and-dealers" component={BuyingAndDealers} />
    </Routes>
  );
}

export default Routes;
