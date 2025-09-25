import { useState } from "react";
import styled from "styled-components";
import { typography } from "../../styles/typography";
import { rem } from "../breakpoints";
import { media } from "../media";
import { weatherConditionsIcon } from "../weatherConditions/WeatherConditions";

const HourlyForecastContainer = styled.div`
  background: var(--color-neutral800);
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem 1.25rem;

  ${media.up("desktop")} {
    grid-row: span 4 / span 4;
    grid-column-start: 5;
    grid-row-start: 2;
  }
`;

const HourlyForecastHeader = styled.div`
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HourlyForecastTitle = styled.h3`
  font-size: ${typography.textPresetFive.fontSize};
  line-height: ${typography.textPresetFive.lineHeight};
  letter-spacing: ${typography.textPresetFive.letterSpacing};
  font-weight: ${typography.textPresetFive.fontWeight};
  font-family: ${typography.textPresetFive.fontFamily};
  color: var(--color-neutral0);
`;

const HourlyForecastLabel = styled.label`
  position: absolute;
  width: 0.063rem;
  height: 0.063rem;
  overflow: hidden;
`;

const HourlyForecastDropdown = styled.select`
  background: var(--color-neutral600);
  border: none;
  border-radius: 0.5rem;
  color: var(--color-neutral0);
  padding: 0.5rem;
  font-size: ${typography.textPresetSeven.fontSize};
  line-height: ${typography.textPresetSeven.lineHeight};
  letter-spacing: ${typography.textPresetSeven.letterSpacing};
  font-weight: ${typography.textPresetSeven.fontWeight};
  font-family: ${typography.textPresetSeven.fontFamily};
  text-align: center;
`;

const HourlyForecastCard = styled.div`
  background: var(--color-neutral600);
  border: ${rem(1)} solid var(--color-neutral600);
  color: var(--color-neutral0);
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  ${media.up("tablet")} {
    padding-top: ${rem(10)};
    padding-bottom: ${rem(10)};
    padding-left: ${rem(12)};
    padding-right: ${rem(16)};
  }
`;

const HourlyForecastTimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.5rem;
`;

const HourlyForecastTime = styled.p`
  font-size: ${typography.textPresetFiveMedium.fontSize};
  line-height: ${typography.textPresetFiveMedium.lineHeight};
  letter-spacing: ${typography.textPresetFiveMedium.letterSpacing};
  font-weight: ${typography.textPresetFiveMedium.fontWeight};
  font-family: ${typography.textPresetFiveMedium.fontFamily};
`;

const HourlyForecastTemp = styled.p`
  font-size: ${typography.textPresetSeven.fontSize};
  line-height: ${typography.textPresetSeven.lineHeight};
  letter-spacing: ${typography.textPresetSeven.letterSpacing};
  font-weight: ${typography.textPresetSeven.fontWeight};
  font-family: ${typography.textPresetSeven.fontFamily};
  text-align: center;
`;

interface HourlyForecastProps {
  hourly: {
    time: string[];
    apparent_temperature: number[];
    weathercode: number[];
  };
  temperatureUnit: "C" | "F";
}

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

export const HourlyForecast = ({
  hourly,
  temperatureUnit,
}: HourlyForecastProps) => {
  const [dayOfTheWeek, setDayOfTheWeek] = useState<string>(() => {
    return new Date().toLocaleDateString(undefined, { weekday: "long" });
  });

  const hourlyData = hourly.time.map((time, index) => ({
    time,
    temperature: hourly.apparent_temperature[index],
    description: weatherCodeToDescription(hourly.weathercode[index]),
  }));

  const filteredHourly = hourlyData.filter((entry) => {
    const entryDate = new Date(entry.time);
    const entryDay = entryDate.toLocaleDateString(undefined, {
      weekday: "long",
    });
    const entryHour = entryDate.getHours();

    // Show hours between 15 (3 PM) and 22 (10 PM)
    return entryDay === dayOfTheWeek && entryHour >= 15 && entryHour <= 22;
  });

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <HourlyForecastContainer>
      <HourlyForecastHeader>
        <HourlyForecastTitle>Hourly forecast</HourlyForecastTitle>
        <HourlyForecastLabel htmlFor="dayOfTheWeek">
          Day of the week:
        </HourlyForecastLabel>
        <HourlyForecastDropdown
          name="dayOfTheWeek"
          value={dayOfTheWeek}
          onChange={(event) => setDayOfTheWeek(event.target.value)}
        >
          {weekdays.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </HourlyForecastDropdown>
      </HourlyForecastHeader>

      {filteredHourly.map((hour) => (
        <HourlyForecastCard key={hour.time}>
          <HourlyForecastTimeContainer>
            <img
              src={weatherConditionsIcon(hour.description)}
              alt={hour.description}
              aria-hidden="true"
              height={40}
              width={40}
            />
            <HourlyForecastTime>
              {new Date(hour.time).toLocaleTimeString(undefined, {
                hour: "numeric",
              })}
            </HourlyForecastTime>
          </HourlyForecastTimeContainer>
          <HourlyForecastTemp>
            {Math.round(hour.temperature)}°{temperatureUnit}
          </HourlyForecastTemp>
        </HourlyForecastCard>
      ))}
    </HourlyForecastContainer>
  );
};
