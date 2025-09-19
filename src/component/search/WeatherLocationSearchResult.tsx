import { useEffect, useState } from "react";
import { CurrentWeatherDetails } from "../currentWeather/CurrentWeatherDetails";
import { CurrentWeatherHeader } from "../currentWeather/currentWeather";
import { DailyForecast } from "../forecast/DailyForecast";

interface LocationResultProps {
  data: any;
  isLoading: boolean;
  error: Error | undefined;
  submittedSearchText: string | null;
}

const today = new Date().toLocaleDateString(undefined, {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});

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
  if (weatherError) return <p>Error fetching weather: {weatherError}</p>;
  if (!weather) return <p>Loading weather...</p>;

  if (data?.results?.length > 0) {
    const location = data.results[0];

    return (
      <>
        <CurrentWeatherHeader
          locationName={location.name}
          country={location.country}
          date={today}
          temperature={weather?.current?.temperature_2m}
        />

        {weather.current && (
          <CurrentWeatherDetails
            apparentTemperature={weather.current.apparent_temperature}
            humidity={weather.current.relative_humidity_2m}
            windSpeed={weather.current.windspeed_10m}
            precipitation={weather.current.precipitation}
          />
        )}

        {weather.daily && <DailyForecast daily={weather.daily} />}
      </>
    );
  }

  if (submittedSearchText) {
    return <p>No results found for "{submittedSearchText}"</p>;
  }

  return null;
};
