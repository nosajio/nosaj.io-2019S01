import * as React from 'react';
import Logo from '../Logo';
import { TBarBtn, TBarFrame, TBarLink, TBarLogo, TBarNav } from './styled';

interface TopBarProps {
  showNav?: boolean;
  padding?: string;
  light?: boolean;
}

const TopBar: React.FunctionComponent<TopBarProps> = ({
  showNav = true,
  padding,
  light = false
}) => {
  return (
    <TBarFrame withPadding={padding}>
      <TBarLogo to="/">
        <Logo color={light ? '#fff' : '#000'}/>
      </TBarLogo>
      <TBarNav isLight={light} isVisible={showNav}>
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
