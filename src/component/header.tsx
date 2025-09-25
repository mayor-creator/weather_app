import { useContext } from "react";
import styled from "styled-components";
import unitsIcon from "../assets/images/icon-units.svg";
import logo from "../assets/images/logo.svg";
import { typography } from "../styles/typography";
import { rem } from "./breakpoints";
import Heading from "./heading";
import { media } from "./media";
import { TempUnitContext } from "./TempUnitContext";

const HeaderMainWrapper = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 3rem;
  padding-bottom: 3rem;

  //mobile only (max-width: 699.98px)
  ${media.down("mobile")} {
  }

  //tablet and up (mind-width: 700px)
  ${media.up("tablet")} {
    padding: ${rem(24)};
    padding-bottom: ${rem(48)};
  }

  //desktop and up (900px - 1439.98px)
  ${media.up("desktop")} {
    padding-left: ${rem(112)};
    padding-right: ${rem(112)};
    padding-top: ${rem(48)};
  }
`;

const LogoUnitsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 1.75rem;
  width: 8.625rem;

  ${media.up("tablet")} {
    width: auto;
    height: auto;
  }
`;

const ToggleButton = styled.button`
  border: none;
  border-radius: 0.375rem;
  background: var(--color-neutral800);
  color: var(--color-neutral0);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: auto;
  padding: 0.313rem;
  transition: 0.3s ease;
  font-size: ${typography.textPresetEight.fontSize};
  line-height: ${typography.textPresetEight.lineHeight};
  letter-spacing: ${typography.textPresetEight.letterSpacing};
  font-weight: ${typography.textPresetEight.fontWeight};
  font-family: ${typography.textPresetEight.fontFamily};

  &:hover,
  &:focus {
    background: var(--color-neutral600);
    outline: 0.125rem solid var(--color-neutral300);
  }

  &:focus {
    outline-offset: 0.125rem;
  }

  ${media.up("tablet")} {
    width: auto;
  }
`;

export const Header = () => {
  const { tempUnit, toggleTempUnit } = useContext(TempUnitContext);

  return (
    <HeaderMainWrapper>
      <LogoUnitsWrapper>
        <Logo src={logo} alt="logo" />
        <ToggleButton type="button" onClick={toggleTempUnit}>
          <img src={unitsIcon} alt="" aria-hidden="true" />
          {tempUnit === "C" ? "F" : "C"}
        </ToggleButton>
      </LogoUnitsWrapper>
      <Heading>How's the sky looking today?</Heading>
    </HeaderMainWrapper>
  );
};
