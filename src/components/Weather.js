import './Weather.css';
import React, { useState } from 'react';
import axios from 'axios';
import SearchEngine from './SearchEngine';
import ResultWeather from './ResultWeather';

export default function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  function search() {
    let apiKey = '094780c710fa4efd669f0df8c3991927';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  //

  if (weather.ready) {
    return (
      <div>
        <SearchEngine handleSubmit={handleSubmit} updateCity={updateCity} />
        <ResultWeather data={weather} />
      </div>
    );
  } else {
    return <SearchEngine handleSubmit={handleSubmit} updateCity={updateCity} />;
  }
}
