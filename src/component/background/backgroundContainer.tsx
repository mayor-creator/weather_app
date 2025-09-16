import styled from "styled-components";

interface BackgroundImageProps {
  mobile: string;
  desktop: string;
}

export const BackgroundImageContainer = styled.div<BackgroundImageProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-image: url(${(props) => props.mobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1.25rem;
  width: 100%;
  height: 17.875rem;

  @media (min-width: 48rem) {
    background-image: url(${(props) => props.desktop});
  }
`;
