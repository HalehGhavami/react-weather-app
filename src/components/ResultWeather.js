import './ResultWeather.css';
import WeatherIcon from './WeatherIcon';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

export default function ResultWeather(props) {
  return (
    <div className="ResultWeather">
      <ul>
        <li>Temperature: {Math.round(props.data.temperature)}°C</li>
        <li>Description: {props.data.description}</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind}km/h</li>
        <li>
          <WeatherIcon code={props.data.icon} />
        </li>
      </ul>
    </div>
  );
}
