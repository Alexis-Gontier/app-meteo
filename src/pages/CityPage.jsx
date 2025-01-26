import { useParams } from 'react-router-dom';
import { useFetchOpenWeatherMap } from '../hooks/useFetchOpenWeatherMap';
import convertKelvinToCelsius from '../utils/convertKelvinToCelsius';

export default function CityPage() {

  const { city } = useParams()
  const { weatherData, loading, error } = useFetchOpenWeatherMap(city)

  return (
    <>
      <h1>City: {city}</h1>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {weatherData && (
        <div>
          <p>Temperature: {convertKelvinToCelsius(weatherData.main.temp)}°C</p>
          <p>Feels like: {convertKelvinToCelsius(weatherData.main.feels_like)}°C</p>
          <p>Min Temp: {convertKelvinToCelsius(weatherData.main.temp_min)}°C</p>
          <p>Max Temp: {convertKelvinToCelsius(weatherData.main.temp_max)}°C</p>
        </div>
      )}
    </>
  )
}
