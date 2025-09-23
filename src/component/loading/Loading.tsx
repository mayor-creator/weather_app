import styled from "styled-components";
import loadingIcon from "../../assets/images/icon-loading.svg";
import { typography } from "../../styles/typography";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const LoadingMessage = styled.p`
  font-size: ${typography.textPresetSix.fontSize};
  line-height: ${typography.textPresetSix.lineHeight};
  letter-spacing: ${typography.textPresetSix.letterSpacing};
  font-weight: ${typography.textPresetSix.fontWeight};
  font-family: ${typography.textPresetSix.fontFamily};
  color: var(--color-neutral200);
`;

export const Loading = () => {
  return (
    <LoadingContainer>
      <img src={loadingIcon} alt="" aria-hidden="true" width={56} height={16} />
      <LoadingMessage>Loading...</LoadingMessage>
    </LoadingContainer>
  );
};
