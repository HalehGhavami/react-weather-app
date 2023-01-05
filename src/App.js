import './App.css';
import Weather from './components/Weather';
// import Forcast from './components/Forcast';
// import Navigation from './components/Navigation';
// import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <div className="container weather-container">
        {/* <Navigation /> */}
        <Weather defaultCity="Tehran" />
        {/* <Forcast /> */}
      </div>
      <footer>
        <small>
          <a
            href="https://github.com/HalehGhavami/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          , by Haleh Ghavami
        </small>
      </footer>
    </div>
  );
}

export default App;
