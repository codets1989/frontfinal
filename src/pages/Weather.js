import React from 'react';
import { WeatherProvider } from '../components/WeatherContext';
import WeatherDisplay from '../components/WeatherDisplay';
import SearchBar from '../components/SearchBar';

const Weather = () =>
{
    return(
        <WeatherProvider>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h1>Weather App</h1>
          <SearchBar/>
          <WeatherDisplay />
        </div>
      </WeatherProvider>
    )
}
export default Weather;