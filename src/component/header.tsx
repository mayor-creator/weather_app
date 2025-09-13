import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import Heading from "./heading";

const HeaderMainWrapper = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 3rem;
  padding-bottom: 3rem;
`;

const LogoUnitsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 1.75rem;
  width: 8.625rem;
`;

export const Header = () => {
  return (
    <HeaderMainWrapper>
      <LogoUnitsWrapper>
        <Logo src={logo} alt="logo" />
        <p style={{ color: "white" }}>Units</p>
      </LogoUnitsWrapper>
      <Heading>How's the sky looking today?</Heading>
    </HeaderMainWrapper>
  );
};
