import styled from "styled-components";
import { typography } from "../styles/typography";

const Heading = styled.h1`
  font-size: ${typography.textPresetOne.fontSize};
  line-height: ${typography.textPresetOne.lineHeight};
  letter-spacing: ${typography.textPresetOne.letterSpacing};
  font-weight: ${typography.textPresetOne.fontWeight};
  font-family: ${typography.textPresetOne.fontFamily};
`;

export default Heading;
