import styled from "styled-components";
import desktopBgIcon from "../../assets/images/bg-today-large.svg";
import mobileBgIcon from "../../assets/images/bg-today-small.svg";

import sunnyIcon from "../../assets/images/icon-sunny.webp";
import { typography } from "../../styles/typography";
import { BackgroundImageContainer } from "../background/backgroundContainer";

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
}

export const CurrentWeatherHeader = ({
  locationName,
  country,
  temperature,
  date,
}: CurrentWeatherHeaderProps) => {
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
          src={sunnyIcon}
          alt=""
          aria-hidden="true"
          height={120}
          width={120}
        />
        <Temperature>{temperature}°</Temperature>
      </TemperatureContainer>
    </BackgroundImageContainer>
  );
};
