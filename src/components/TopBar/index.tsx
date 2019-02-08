import * as React from 'react';
import Logo from '../Logo';
import { TBarBtn, TBarFrame, TBarLink, TBarLogo, TBarNav } from './styled';

interface TopBarProps {
  showNav?: boolean;
}

const TopBar: React.FunctionComponent<TopBarProps> = ({ showNav = true }) => {
  return (
    <TBarFrame>
      <TBarLogo to="/">
        <Logo />
      </TBarLogo>
      <TBarNav isVisible={showNav}>
        <TBarLink to="/#work">Work</TBarLink>
        <TBarLink to="/services">How I Help Startups</TBarLink>
        <TBarLink to="/contact">Contact</TBarLink>
        <TBarBtn bgColor="#FFE793" fgColor="black" to="/contact">
          Hire me for your next project
        </TBarBtn>
      </TBarNav>
    </TBarFrame>
  );
};

export default TopBar;
