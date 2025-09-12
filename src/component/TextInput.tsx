import { useId, useState } from "react";
import styled from "styled-components";
import searchIcon from "../assets/images/icon-search.svg";
import { typography } from "../styles/typography";

const InputSection = styled.section<{ isActive: boolean }>`
  display: flex;
  flex-direction: row;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  background-color: var(--color-neutral800);
  color: var(--color-neutral200);
  cursor: pointer;
  gap: 1rem;
  padding: 1rem 1.5rem;

  font-size: ${typography.textPresetFiveMedium.fontSize};
  font-weight: ${typography.textPresetFiveMedium.fontWeight};
  font-family: ${typography.textPresetFiveMedium.fontFamily};
  line-height: ${typography.textPresetFiveMedium.lineHeight};
  letter-spacing: ${typography.textPresetFiveMedium.letterSpacing};

  transition: border-color 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    background-color: var(--color-neutral700);
  }

  &:focus {
    outline: none;
    border-color: var(--color-neutral0);
    box-shadow: 0 0 5px var(--color-neutral800);
  }

  ${({ isActive }) =>
    isActive &&
    `border-color: var(--color-neutral0);  box-shadow: 0 0 5px var(--color-neutral800);`}
`;

const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const Input = styled.input`
  background-color: var(--color-neutral800);
  border: none;
  color: var(--color-neutral200);
  cursor: text;
  flex-grow: 1;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-neutral700);
  }

  &:focus {
    outline: none;
  }
`;

export const TextInput = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const id = useId();

  const handleFocus = () => setIsActive(true);
  const handleBlur = () => setIsActive(false);

  return (
    <InputSection isActive={isActive}>
      <img src={searchIcon} alt="search icon" />
      <Label htmlFor={id}>Search for a city </Label>
      <Input
        id={id}
        type="text"
        value={searchText}
        placeholder="Search for a city, e.g., New York"
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label="Search for a city"
        onChange={(event) => setSearchText(event.target.value)}
      />
    </InputSection>
  );
};
