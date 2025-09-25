import styled from "styled-components";
import { rem } from "./breakpoints";
import { media } from "./media";
import { WeatherLocationSearch } from "./search/WeatherLocationSearch";

const MainContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0rem 1rem;
  padding-bottom: ${rem(80)};

  //tablet and up (mind-width: 700px)
  ${media.up("tablet")} {
    padding: ${rem(0)} ${rem(24)};
  }

  //desktop and up (900px - 1439.98px)
  ${media.up("desktop")} {
    padding-left: ${rem(112)};
    padding-right: ${rem(112)};
    display: grid;
    gap: ${rem(20)};
  }
`;

export const Main = () => {
  return (
    <MainContentWrapper>
      <WeatherLocationSearch />
    </MainContentWrapper>
  );
};
