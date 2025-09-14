import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";

import { SearchButton } from "./SearchButton";
import { TextInput } from "./TextInput";
import { WeatherLocationSearchResult } from "./WeatherLocationSearchResult";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

async function fetcher(endpoint: RequestInfo | URL) {
  const response = await fetch(endpoint);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong ");
  }
  const data = await response.json();
  return data;
}

export const WeatherLocationSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [submittedSearchText, setSubmittedSearchText] = useState<string | null>(
    null
  );
  const shouldFetchData = Boolean(submittedSearchText?.trim());

  const { data, error, isLoading } = useSWR(
    shouldFetchData
      ? `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          submittedSearchText ?? ""
        )}&count=1`
      : null,
    fetcher
  );

  const handleLocation = () => {
    if (searchText.trim()) {
      setSubmittedSearchText(searchText.trim());
    }
  };

  return (
    <>
      <SearchContainer>
        <TextInput
          searchText={searchText}
          onSearchTextChange={setSearchText}
        ></TextInput>
        <SearchButton onClick={handleLocation} />
      </SearchContainer>

      <div>
        <WeatherLocationSearchResult
          data={data}
          isLoading={isLoading}
          error={error}
          submittedSearchText={submittedSearchText}
        />
      </div>
    </>
  );
};
