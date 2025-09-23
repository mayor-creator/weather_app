import styled from "styled-components";
import errorIcon from "../../assets/images/icon-error.svg";
import retryIcon from "../../assets/images/icon-retry.svg";
import { typography } from "../../styles/typography";

const ErrorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const ErrorMessageText = styled.p`
  font-size: ${typography.textPresetTwo.fontSize};
  line-height: ${typography.textPresetTwo.lineHeight};
  letter-spacing: ${typography.textPresetTwo.letterSpacing};
  font-weight: ${typography.textPresetTwo.fontWeight};
  font-family: ${typography.textPresetTwo.fontFamily};
  color: var(--color-neutral0);
`;

const ErrorMessageButton = styled.button`
  border: none;
  background: #262540;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  color: var(--color-neutral0);
  align-items: center;
  padding: 0.75rem 1.25rem;
  transition: background 0.3s ease;

  &:hover {
    background: #3a3860;
  }

  &:focus {
    outline: 2px solid var(--color-neutral200);
    outline-offset: 2px;
  }

  &:active {
    background: #1e1d33;
  }
`;

const ErrorMessageTextMedium = styled.p`
  font-size: ${typography.textPresetFiveMedium.fontSize};
  line-height: ${typography.textPresetFiveMedium.lineHeight};
  letter-spacing: ${typography.textPresetFiveMedium.letterSpacing};
  font-weight: ${typography.textPresetFiveMedium.fontWeight};
  font-family: ${typography.textPresetFiveMedium.fontFamily};
  text-align: center;
  color: var(--color-neutral0);
`;

interface ErrorMessageProps {
  onClick: () => void;
  errorMessageText: string;
  errorMessageTextMedium: string;
}

export const ErrorMessage = ({
  onClick,
  errorMessageText,
  errorMessageTextMedium,
}: ErrorMessageProps) => {
  return (
    <ErrorMessageContainer>
      <img src={errorIcon} alt="" aria-hidden="true" />
      <ErrorMessageText>{errorMessageText}</ErrorMessageText>
      <ErrorMessageTextMedium>{errorMessageTextMedium}</ErrorMessageTextMedium>
      <ErrorMessageButton type="button" onClick={onClick}>
        <img src={retryIcon} alt="" aria-hidden="true" />
        <span>Retry</span>
      </ErrorMessageButton>
    </ErrorMessageContainer>
  );
};
