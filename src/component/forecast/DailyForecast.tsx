import styled from "styled-components";
import { typography } from "../../styles/typography";
import { weatherConditionsIcon } from "../weatherConditions/WeatherConditions";

interface DailyData {
  time: string[];
  apparent_temperature_max: number[];
  apparent_temperature_min: number[];
  precipitation_sum: number[];
  windspeed_10m_max: number[];
}

interface DailyForecastProps {
  daily: DailyData;
  weathercode: number[];
  temperatureUnit: "C" | "F";
}

const ForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const ForecastTitle = styled.h2`
  font-size: ${typography.textPresetFive.fontSize};
  line-height: ${typography.textPresetFive.lineHeight};
  letter-spacing: ${typography.textPresetFive.letterSpacing};
  font-weight: ${typography.textPresetFive.fontWeight};
  font-family: ${typography.textPresetFive.fontFamily};
  color: var(--color-neutral0);
`;

const ForecastList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(103.66px, 1fr));
  gap: 1rem;
  width: 100%;
`;

const ForecastCard = styled.div`
  height: auto;
  background: var(--color-neutral800);
  border-radius: 0.75rem;
  color: var(--color-neutral0);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
`;

const ForecastDay = styled.p`
  font-size: ${typography.textPresetSix.fontSize};
  line-height: ${typography.textPresetSix.lineHeight};
  letter-spacing: ${typography.textPresetSix.letterSpacing};
  font-weight: ${typography.textPresetSix.fontWeight};
  font-family: ${typography.textPresetSix.fontFamily};
`;

const TempRangeContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`;

const TempDetail = styled.p`
  font-size: ${typography.textPresetSeven.fontSize};
  line-height: ${typography.textPresetSeven.lineHeight};
  letter-spacing: ${typography.textPresetSeven.letterSpacing};
  font-weight: ${typography.textPresetSeven.fontWeight};
  font-family: ${typography.textPresetSeven.fontFamily};
  text-align: center;
`;

const weatherCodeToDescription = (code: number): string => {
  const map: { [key: number]: string } = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Freezing drizzle",
    57: "Freezing drizzle dense",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Freezing rain light",
    67: "Freezing rain heavy",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    77: "Snow grains",
    80: "Rain showers slight",
    81: "Rain showers moderate",
    82: "Rain showers violent",
    85: "Snow showers slight",
    86: "Snow showers heavy",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };

  return map[code] || "Unknown";
};

export const DailyForecast = ({
  daily,
  weathercode,
  temperatureUnit,
}: DailyForecastProps) => {
  const dailyHour = daily.time.map((time, index) => ({
    time,
    description: weatherCodeToDescription(weathercode[index]),
  }));

  return (
    <ForecastContainer>
      <ForecastTitle>Daily forecast</ForecastTitle>
      <ForecastList>
        {daily.time.map((date, index) => {
          const day = new Date(date).toLocaleDateString(undefined, {
            weekday: "short",
          });

          return (
            <ForecastCard key={date}>
              <ForecastDay>{day}</ForecastDay>
              <img
                src={weatherConditionsIcon(dailyHour[index].description)}
                alt={dailyHour[index].description}
                aria-hidden="true"
                height={40}
                width={40}
              />
              <TempRangeContainer>
                <TempDetail>
                  {Math.round(daily.apparent_temperature_min[index])}°
                  {temperatureUnit}
                </TempDetail>
                <TempDetail>
                  {Math.round(daily.apparent_temperature_max[index])}°
                  {temperatureUnit}
                </TempDetail>
              </TempRangeContainer>
            </ForecastCard>
          );
        })}
      </ForecastList>
    </ForecastContainer>
  );
};
