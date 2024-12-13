// src/components/WeatherDisplay.js
import React, { useContext } from 'react';
import WeatherContext from './WeatherContext';

const WeatherDisplay = () => {
  const { weatherData, loading, error } = useContext(WeatherContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h2>Weather Data for {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;
