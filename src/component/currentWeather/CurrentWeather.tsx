import styled from "styled-components";
import desktopBgIcon from "../../assets/images/bg-today-large.svg";
import mobileBgIcon from "../../assets/images/bg-today-small.svg";
import { typography } from "../../styles/typography";
import { BackgroundImageContainer } from "../background/backgroundContainer";
import { weatherConditionsIcon } from "../weatherConditions/WeatherConditions";

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

interface CurrentWeatherHeaderProps {
  locationName: string;
  country: string;
  temperature: number;
  date: string;
  weathercode: number;
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

export const CurrentWeatherHeader = ({
  locationName,
  country,
  temperature,
  date,
  weathercode,
  temperatureUnit,
}: CurrentWeatherHeaderProps) => {
  const description = weatherCodeToDescription(weathercode);

  return (
    <BackgroundImageContainer mobile={mobileBgIcon} desktop={desktopBgIcon}>
      <LocationInfo>
        <LocationName>
          <strong>
            {locationName}, {country}
          </strong>
        </LocationName>
        <LocationDate>{date}</LocationDate>
      </LocationInfo>

      <TemperatureContainer>
        <img
          src={weatherConditionsIcon(description)}
          alt={description}
          aria-hidden="true"
          height={120}
          width={120}
        />
        <Temperature>
          {Math.round(temperature)}°{temperatureUnit}
        </Temperature>
      </TemperatureContainer>
    </BackgroundImageContainer>
  );
};
