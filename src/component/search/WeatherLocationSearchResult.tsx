import { useEffect, useState } from "react";

interface LocationResultProps {
  data: any;
  isLoading: boolean;
  error: Error | undefined;
  submittedSearchText: string | null;
}

const getWeather = async (lat: number, lon: number) => {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
    `&hourly=apparent_temperature,relative_humidity_2m,precipitation,windspeed_10m` +
    `&daily=apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max,relative_humidity_2m_max` +
    `&current=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,windspeed_10m` +
    `&timezone=auto`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch weather data");
  return await res.json();
};

export const WeatherLocationSearchResult = ({
  data,
  isLoading,
  error,
  submittedSearchText,
}: LocationResultProps) => {
  const [weather, setWeather] = useState<any>(null);
  const [weatherError, setWeatherError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (data?.results?.length > 0) {
        const location = data.results[0];
        try {
          const weatherData = await getWeather(
            location.latitude,
            location.longitude
          );
          setWeather(weatherData);
        } catch (err) {
          setWeatherError((err as Error).message);
        }
      }
    };

    fetchWeather();
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (data?.results?.length > 0) {
    const location = data.results[0];

    return (
      <div>
        <h3>Search Result:</h3>
        <p>
          <strong>
            {location.name}, {location.country}
          </strong>
        </p>
        <p>Timezone: {location.timezone}</p>
        <hr />

        <h4>Current Weather:</h4>

        {weatherError && <p>Error fetching weather: {weatherError}</p>}
        {!weather && <p>Loading weather...</p>}

        {weather?.current && (
          <div>
            <p>Temperature: {weather.current.temperature_2m} °C</p>
            <p>Feels Like: {weather.current.apparent_temperature} °C</p>
            <p>Humidity: {weather.current.relative_humidity_2m} %</p>
            <p>Precipitation: {weather.current.precipitation} mm</p>
            <p>Wind Speed: {weather.current.windspeed_10m} km/h</p>
          </div>
        )}
      </div>
    );
  }

  if (submittedSearchText) {
    return <p>No results found for "{submittedSearchText}"</p>;
  }

  return null;
};
