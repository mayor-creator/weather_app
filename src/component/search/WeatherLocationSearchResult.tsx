import { useCallback, useContext, useEffect, useState } from "react";
import { TempUnitContext } from "../../component/TempUnitContext";
import { CurrentWeatherHeader } from "../currentWeather/CurrentWeather";
import { CurrentWeatherDetails } from "../currentWeather/CurrentWeatherDetails";
import { DailyForecast } from "../forecast/DailyForecast";
import { HourlyForecast } from "../forecast/HourlyForecast";
import { ErrorMessage } from "../loading/ErrorMessage";
import { Loading } from "../loading/Loading";
import { CelsiusToFahrenheit } from "../TempConverter";

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
    `&hourly=apparent_temperature,relative_humidity_2m,precipitation,windspeed_10m,weathercode` +
    `&daily=apparent_temperature_max,apparent_temperature_min,precipitation_sum,windspeed_10m_max,relative_humidity_2m_max,weathercode` +
    `&current=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,windspeed_10m,weathercode` +
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

  const context = useContext(TempUnitContext);
  if (!context) {
    throw new Error(
      "TempUnitContext must be used within a TempUnitContextProvider"
    );
  }
  const { unit } = context;

  const fetchWeather = useCallback(async () => {
    if (data?.results?.length > 0) {
      const location = data.results[0];
      try {
        setWeatherError(null);
        const weatherData = await getWeather(
          location.latitude,
          location.longitude
        );
        setWeather(weatherData);
      } catch (err) {
        setWeather(null);
        setWeatherError((err as Error).message);
      }
    }
  }, [data]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  if (isLoading) return <Loading></Loading>;
  if (error) return <p>Error: {error.message}</p>;
  if (weatherError) {
    return (
      <ErrorMessage
        onClick={fetchWeather}
        errorMessageText="Something went wrong"
        errorMessageTextMedium="We couldn't connect to the server(API error). Please try again in a few moments."
      ></ErrorMessage>
    );
  }
  if (!weather) return <Loading></Loading>;

  if (data?.results?.length > 0) {
    const location = data.results[0];

    const convertTemp = (temp: number) =>
      unit === "F" ? CelsiusToFahrenheit(temp) : temp;

    const convertArray = (arr: number[]) =>
      unit === "F" ? arr.map(CelsiusToFahrenheit) : arr;

    return (
      <>
        <CurrentWeatherHeader
          locationName={location.name}
          country={location.country}
          date={today}
          temperature={convertTemp(weather?.current?.temperature_2m)}
          weathercode={weather?.current?.weathercode}
          temperatureUnit={unit}
        />

        {weather.current && (
          <CurrentWeatherDetails
            apparentTemperature={convertTemp(
              weather.current.apparent_temperature
            )}
            humidity={weather.current.relative_humidity_2m}
            windSpeed={weather.current.windspeed_10m}
            precipitation={weather.current.precipitation}
            temperatureUnit={unit}
          />
        )}

        {weather.daily && (
          <DailyForecast
            daily={{
              ...weather.daily,
              apparent_temperature_max: convertArray(
                weather.daily.apparent_temperature_max
              ),
              apparent_temperature_min: convertArray(
                weather.daily.apparent_temperature_min
              ),
            }}
            weathercode={weather.daily.weathercode}
            temperatureUnit={unit}
          />
        )}

        {weather.hourly && (
          <HourlyForecast
            hourly={{
              ...weather.hourly,
              apparent_temperature: convertArray(
                weather.hourly.apparent_temperature
              ),
            }}
            temperatureUnit={unit}
          />
        )}
      </>
    );
  }

  if (submittedSearchText) {
    return <p>No results found for "{submittedSearchText}"</p>;
  }

  return null;
};
