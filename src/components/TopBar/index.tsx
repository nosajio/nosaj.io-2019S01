import * as React from 'react';
import { NavigationDisplayContext } from '../../contexts/NavigationDisplayContext';
import { mediaRules } from '../../styled/media';
import Logo from '../Logo';
import Media from '../Media';
import NavigationDesktop from '../NavigationDesktop';
import {
  TBarFrame,
  TBarLogo,
  ToggleMobileNav,
  ToggleMobileNavBars
} from './styled';

interface TopBarProps {
  light?: boolean;
}

const TopBar: React.FunctionComponent<TopBarProps> = ({ light = false }) => {
  const { toggleNav, isNavActive } = React.useContext(NavigationDisplayContext);
  const mobileNavBp = mediaRules[1].min ? mediaRules[1].min : 700;
  return (
    <TBarFrame>
      <TBarLogo to="/">
        <Logo color={light ? '#fff' : '#000'} />
      </TBarLogo>
      <Media max={mobileNavBp}>
        <ToggleMobileNav
          withText={isNavActive ? 'Close' : 'Nav'}
          onClick={() => toggleNav()}
        >
          {!isNavActive && <ToggleMobileNavBars />}
        </ToggleMobileNav>
      </Media>
      <Media min={mobileNavBp + 1}>
        <NavigationDesktop />
      </Media>
    </TBarFrame>
  );
};

export default TopBar;
