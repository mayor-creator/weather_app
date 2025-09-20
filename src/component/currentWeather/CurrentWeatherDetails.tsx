import styled from "styled-components";
import { typography } from "../../styles/typography";

const WeatherDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const WeatherDetailsItemContainer = styled.div`
  border-radius: 0.75rem;
  background-color: var(--color-neutral800);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.25rem;
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

interface CurrentWeatherDetailsProps {
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  temperatureUnit: "C" | "F";
}

export const CurrentWeatherDetails = ({
  apparentTemperature,
  humidity,
  windSpeed,
  precipitation,
  temperatureUnit,
}: CurrentWeatherDetailsProps) => {
  return (
    <WeatherDetailsContainer>
      <WeatherDetailsItemContainer>
        <WeatherDetailsLabel>Feels Like</WeatherDetailsLabel>
        <WeatherDetailsValue>
          {Math.round(apparentTemperature)}°{temperatureUnit}
        </WeatherDetailsValue>
      </WeatherDetailsItemContainer>

      <WeatherDetailsItemContainer>
        <WeatherDetailsLabel>Humidity</WeatherDetailsLabel>
        <WeatherDetailsValue>{humidity}%</WeatherDetailsValue>
      </WeatherDetailsItemContainer>

      <WeatherDetailsItemContainer>
        <WeatherDetailsLabel>Wind</WeatherDetailsLabel>
        <WeatherDetailsValue>{Math.round(windSpeed)}km/h</WeatherDetailsValue>
      </WeatherDetailsItemContainer>

      <WeatherDetailsItemContainer>
        <WeatherDetailsLabel>Precipitation</WeatherDetailsLabel>
        <WeatherDetailsValue>{precipitation}mm</WeatherDetailsValue>
      </WeatherDetailsItemContainer>
    </WeatherDetailsContainer>
  );
};
