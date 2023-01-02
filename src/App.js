import './App.css';
import Forcast from './components/Forcast';
import Navigation from './components/Navigation';
import ResultWeather from './components/ResultWeather';
import SearchEngine from './components/SearchEngine';

function App() {
  
  return (
    <div className="App">
      <Navigation/>
      <SearchEngine />
      <ResultWeather />
      <Forcast />
    </div>
  );
}

export default App;
