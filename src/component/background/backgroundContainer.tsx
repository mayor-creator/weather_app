import styled from "styled-components";
import { media } from "../media";

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

  ${media.up("tablet")} {
    flex-direction: row;
    background-image: url(${(props) => props.desktop});
  }

  ${media.up("desktop")} {
    grid-column: span 4 / span 4;
    grid-row: span 2 / span 2;
    grid-row-start: 2;
  }
`;
