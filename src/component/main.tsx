import styled from "styled-components";
import { WeatherLocationSearch } from "./search/WeatherLocationSearch";

const MainContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0rem 1rem;
`;

export const Main = () => {
  return (
    <MainContentWrapper>
      <WeatherLocationSearch />
    </MainContentWrapper>
  );
};
