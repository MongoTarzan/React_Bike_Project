import App from './App'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GearAndShoewear from './components/gear-and-shoewear';
import LegalTips from './components/legal-tips';
import DrivingTips from './components/driving-tips';
import BuyingAndDealers from './components/buying-and-dealers';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<App />} />
          <Route path="/gear-and-shoewear" element={<GearAndShoewear />} />
          <Route path="/legal-tips" element={<LegalTips />} />
          <Route path="/driving-tips" element={<DrivingTips />} />
          <Route path="/buying-and-dealers" element={<BuyingAndDealers />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);