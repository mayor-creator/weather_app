import styled from "styled-components";
import { typography } from "../styles/typography";

const Heading = styled.h1`
  font-size: ${typography.textPresetTwo.fontSize};
  line-height: ${typography.textPresetTwo.lineHeight};
  letter-spacing: ${typography.textPresetTwo.letterSpacing};
  font-weight: ${typography.textPresetTwo.fontWeight};
  font-family: ${typography.textPresetTwo.fontFamily};
  color: var(--color-neutral0);
`;

export default Heading;
