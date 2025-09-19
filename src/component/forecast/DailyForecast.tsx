import styled from "styled-components";
import { typography } from "../../styles/typography";

interface DailyData {
  time: string[];
  apparent_temperature_max: number[];
  apparent_temperature_min: number[];
  precipitation_sum: number[];
  windspeed_10m_max: number[];
}

interface DailyForecastProps {
  daily: DailyData;
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

export const DailyForecast = ({ daily }: DailyForecastProps) => {
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
              <TempRangeContainer>
                <TempDetail>
                  {daily.apparent_temperature_min[index]}°
                </TempDetail>
                <TempDetail>
                  {daily.apparent_temperature_max[index]}°
                </TempDetail>
              </TempRangeContainer>
            </ForecastCard>
          );
        })}
      </ForecastList>
    </ForecastContainer>
  );
};
