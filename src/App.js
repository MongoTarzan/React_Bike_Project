import './App.css';
import { Link } from 'react-router-dom';
import Routes from './BikeRoutes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Willkommen auf deiner Motorrad-Website!</h1>
        <div className="Button-container">
          <Link to="/gear-and-shoewear" className="NavigateButton">
            Schutzkleidung &amp; Schuhwerk
          </Link>
          <br></br>
          <Link to="/driving-tips" className="NavigateButton">
            Fahrtipps
          </Link>
          <br></br>
          <Link to="/buying-and-dealers" className="NavigateButton">
            Kauf &amp; Händler
          </Link>
          <br></br>
          <Link to="/legal-tips" className="NavigateButton  ">
            Rechtliche Tipps
          </Link>         
        </div>
      </header>
    </div>
  );
}

export default App;
