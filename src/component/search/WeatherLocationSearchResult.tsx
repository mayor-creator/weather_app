import { useEffect, useState } from "react";
import styled from "styled-components";
import { typography } from "../../styles/typography";
import { DailyForecast } from "../forecast/DailyForecast";

import { BackgroundImageContainer } from "../background/backgroundContainer";

import mobileBgIcon from "../../assets/images/bg-today-small.svg";
import desktopBgIcon from "../../assets/images/bg-today-large.svg";
import sunnyIcon from "../../assets/images/icon-sunny.webp";

const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LocationName = styled.p`
  font-size: ${typography.textPresetFour.fontSize};
  line-height: ${typography.textPresetFour.lineHeight};
  letter-spacing: ${typography.textPresetFour.letterSpacing};
  font-weight: ${typography.textPresetFour.fontWeight};
  font-family: ${typography.textPresetFour.fontFamily};
  color: var(--color-neutral0);
`;

const LocationDate = styled.p`
  font-size: ${typography.textPresetSix.fontSize};
  line-height: ${typography.textPresetSix.lineHeight};
  letter-spacing: ${typography.textPresetSix.letterSpacing};
  font-weight: ${typography.textPresetSix.fontWeight};
  font-family: ${typography.textPresetSix.fontFamily};
  color: var(--color-neutral0);
`;

const TemperatureContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const Temperature = styled.p`
  font-size: ${typography.textPresetOne.fontSize};
  line-height: ${typography.textPresetOne.lineHeight};
  letter-spacing: ${typography.textPresetOne.letterSpacing};
  font-weight: ${typography.textPresetOne.fontWeight};
  font-family: ${typography.textPresetOne.fontFamily};
  color: var(--color-neutral0);
`;

const WeatherDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
`;

const WeatherDetailsItemContainer = styled.div`
  border-radius: 0.75rem;
  background-color: var(--color-neutral800);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.25rem;
  height: auto;
  min-height: 7.375rem;
`;

const WeatherDetailsLabel = styled.p`
  font-size: ${typography.textPresetSix.fontSize};
  line-height: ${typography.textPresetSix.lineHeight};
  letter-spacing: ${typography.textPresetSix.letterSpacing};
  font-weight: ${typography.textPresetSix.fontWeight};
  font-family: ${typography.textPresetSix.fontFamily};
  color: var(--color-neutral200);
`;

const WeatherDetailsValue = styled.p`
  font-size: ${typography.textPresetThree.fontSize};
  line-height: ${typography.textPresetThree.lineHeight};
  letter-spacing: ${typography.textPresetThree.letterSpacing};
  font-weight: ${typography.textPresetThree.fontWeight};
  font-family: ${typography.textPresetThree.fontFamily};
  color: var(--color-neutral0);
`;

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

  if (data?.results?.length > 0) {
    const location = data.results[0];

    return (
      <>
        <BackgroundImageContainer mobile={mobileBgIcon} desktop={desktopBgIcon}>
          <LocationInfo>
            <LocationName>
              <strong>
                {location.name}, {location.country}
              </strong>
            </LocationName>
            <LocationDate>{today}</LocationDate>
          </LocationInfo>
          {weather?.current && (
            <TemperatureContainer>
              <img
                src={sunnyIcon}
                alt=""
                aria-hidden="true"
                height={120}
                width={120}
              />
              <Temperature>{weather.current.temperature_2m}°</Temperature>
            </TemperatureContainer>
          )}
        </BackgroundImageContainer>

        {weatherError && <p>Error fetching weather: {weatherError}</p>}
        {!weather && <p>Loading weather...</p>}

        {weather?.current && (
          <WeatherDetailsContainer>
            <WeatherDetailsItemContainer>
              <WeatherDetailsLabel>Feels Like </WeatherDetailsLabel>
              <WeatherDetailsValue>
                {weather.current.apparent_temperature}°
              </WeatherDetailsValue>
            </WeatherDetailsItemContainer>

            <WeatherDetailsItemContainer>
              <WeatherDetailsLabel>Humidity</WeatherDetailsLabel>
              <WeatherDetailsValue>
                {weather.current.relative_humidity_2m}%
              </WeatherDetailsValue>
            </WeatherDetailsItemContainer>

            <WeatherDetailsItemContainer>
              <WeatherDetailsLabel>Wind</WeatherDetailsLabel>
              <WeatherDetailsValue>
                {weather.current.windspeed_10m}km/h
              </WeatherDetailsValue>
            </WeatherDetailsItemContainer>

            <WeatherDetailsItemContainer>
              <WeatherDetailsLabel>Precipitation</WeatherDetailsLabel>
              <WeatherDetailsValue>
                {weather.current.precipitation}mm
              </WeatherDetailsValue>
            </WeatherDetailsItemContainer>
          </WeatherDetailsContainer>
        )}

        {weather?.daily && <DailyForecast daily={weather.daily} />}
      </>
    );
  }

  if (submittedSearchText) {
    return <p>No results found for "{submittedSearchText}"</p>;
  }

  return null;
};
