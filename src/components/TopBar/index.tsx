import * as React from 'react';
import { TBarBtn, TBarFrame, TBarLink, TBarLogo, TBarNav } from './styled';
import Logo from '../Logo';

interface TopBarProps {}

const TopBar: React.FunctionComponent<TopBarProps> = props => {
  return (
    <TBarFrame>
      <TBarLogo to="/">
        <Logo />
      </TBarLogo>
      <TBarNav>
        <TBarLink to="/#work">Work</TBarLink>
        <TBarLink to="/services">How I Help Startups</TBarLink>
        <TBarLink to="/contact">Contact</TBarLink>
        <TBarBtn to="/contact">Hire Me</TBarBtn>
      </TBarNav>
    </TBarFrame>
  );
};

export default TopBar;
