import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import Heading from "./heading";

const HeaderMainWrapper = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 48px;
`;

const LogoUnitsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 28px;
  width: 138px;
`;

export const Header = () => {
  return (
    <HeaderMainWrapper>
      <LogoUnitsWrapper>
        <Logo src={logo} alt="logo" />
        <p style={{ color: "white" }}>Units</p>
      </LogoUnitsWrapper>
      <Heading>How's the sky looking today</Heading>
    </HeaderMainWrapper>
  );
};
