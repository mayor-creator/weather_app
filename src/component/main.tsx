import styled from "styled-components";
import { SearchButton } from "./SearchButton";
import { TextInput } from "./TextInput";

const MainContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0rem 1rem;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Main = () => {
  const handleWeatherApi = () => {
    console.log("I call the api");
  };

  return (
    <MainContentWrapper>
      <SearchContainer>
        <TextInput></TextInput>
        <SearchButton onClick={handleWeatherApi} />
      </SearchContainer>
    </MainContentWrapper>
  );
};
