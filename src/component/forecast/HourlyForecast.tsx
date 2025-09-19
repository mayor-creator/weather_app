import { useState } from "react";
import styled from "styled-components";
import overcastIcon from "../../assets/images/icon-overcast.webp";
import { typography } from "../../styles/typography";

const HourlyForecastContainer = styled.div`
  background: var(--color-neutral800);
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem 1.25rem;
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
  color: var(--color-neutral0);
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  align-items: center;
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
  };
}

export const HourlyForecast = ({ hourly }: HourlyForecastProps) => {
  const [dayOfTheWeek, setDayOfTheWeek] = useState<string>(() => {
    return new Date().toLocaleDateString(undefined, { weekday: "long" });
  });

  const now = new Date();
  const hourlyData = hourly.time.map((time, index) => ({
    time,
    temperature: hourly.apparent_temperature[index],
  }));

  // const nextHours = hourlyData
  //   .filter((entry) => {
  //     const entryDate = new Date(entry.time);
  //     return entryDate > now && entryDate.getDate() === now.getDate();
  //   })
  //   .slice(0, 6);

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
        <HourlyForecastCard key={crypto.randomUUID()}>
          <HourlyForecastTimeContainer>
            <img
              src={overcastIcon}
              alt=""
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
            {Math.round(hour.temperature)}°
          </HourlyForecastTemp>
        </HourlyForecastCard>
      ))}
    </HourlyForecastContainer>
  );
};
