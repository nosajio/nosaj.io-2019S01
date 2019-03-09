import * as React from 'react';
import { NavigationDisplayContext } from '../../contexts/NavigationDisplayContext';
import { mediaRules } from '../../styled/media';
import Logo from '../Logo';
import Media from '../Media';
import {
  TBarFrame,
  TBarLink,
  TBarLogo,
  TBarNav,
  ToggleMobileNav
} from './styled';

interface TopBarProps {
  light?: boolean;
}

const TopBar: React.FunctionComponent<TopBarProps> = ({ light = false }) => {
  const { toggleNav, isNavActive } = React.useContext(NavigationDisplayContext);
  const mobileNavBp = mediaRules[1].min ? mediaRules[1].min : 700;
  console.log(isNavActive);
  return (
    <TBarFrame>
      <TBarLogo to="/">
        <Logo color={light ? '#fff' : '#000'} />
      </TBarLogo>
      <Media max={mobileNavBp}>
        <ToggleMobileNav onClick={() => toggleNav()} />
      </Media>
      <Media min={mobileNavBp + 1}>
        <TBarNav isLight={light}>
          <TBarLink to="/#work">Work</TBarLink>
          <TBarLink to="/services">Services for startups</TBarLink>
          <TBarLink to="#contact">Contact</TBarLink>
          {/* <TBarBtn caps bgColor="#FFE793" fgColor="black" to="#contact">
          Hire me for your next project
        </TBarBtn> */}
        </TBarNav>
      </Media>
    </TBarFrame>
  );
};

export default TopBar;
