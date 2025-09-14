import styled from "styled-components";
import { typography } from "../../styles/typography";

const Button = styled.button`
  border: none;
  border-radius: 0.75rem;
  background-color: var(--color-blue500);
  color: var(--color-neutral0);
  cursor: pointer;

  font-size: ${typography.textPresetFiveMedium.fontSize};
  font-weight: ${typography.textPresetFiveMedium.fontWeight};
  font-family: ${typography.textPresetFiveMedium.fontFamily};
  line-height: ${typography.textPresetFiveMedium.lineHeight};
  letter-spacing: ${typography.textPresetFiveMedium.letterSpacing};

  padding: 1rem 1.5rem;
  transition: all 0.3s ease;
  min-width: 7.125rem;
  height: auto;

  &:hover {
    background-color: var(--color-blue700);
    color: var(--color-neutral0);
  }

  &:focus {
    background-color: var(--color-blue500);
    color: var(--color-neutral0);
    filter: drop-shadow(0rem 0rem 0.188rem var(--color-neutral900))
      drop-shadow(0rem 0rem 0.313rem var(--color-neutral500));
  }
`;

interface SearchButtonProp {
  onClick: () => void;
}

export const SearchButton = ({ onClick }: SearchButtonProp) => {
  return (
    <Button type="button" onClick={onClick}>
      Search
    </Button>
  );
};
