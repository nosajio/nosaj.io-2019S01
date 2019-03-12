import * as React from 'react';
import { NavigationDisplayContext } from '../../contexts/NavigationDisplayContext';
import { mediaRules } from '../../styled/media';
import Logo from '../Logo';
import Media from '../Media';
import NavigationDesktop from '../NavigationDesktop';
import {
  TBarFrame,
  TBarLogo,
  ToggleNav,
  ToggleNavBars,
  UnderLogoText,
  LogoLink
} from './styled';

interface TopBarProps {
  light?: boolean;
  underLogoText?: string;
}

const TopBar: React.FunctionComponent<TopBarProps> = ({
  light = false,
  underLogoText
}) => {
  const { toggleNav, isNavActive } = React.useContext(NavigationDisplayContext);
  const mobileNavBp = mediaRules[1].min ? mediaRules[1].min : 700;
  return (
    <TBarFrame>
      <TBarLogo>
        <LogoLink to="/">
          <Logo color={light ? '#fff' : '#000'} />
        </LogoLink>
        {underLogoText && <UnderLogoText>{underLogoText}</UnderLogoText>}
      </TBarLogo>
      <Media max={mobileNavBp}>
        <ToggleNav
          withText={isNavActive ? 'Close' : 'Nav'}
          onClick={() => toggleNav()}
        >
          {!isNavActive && <ToggleNavBars />}
        </ToggleNav>
      </Media>
      <Media min={mobileNavBp + 1}>
        <NavigationDesktop />
      </Media>
    </TBarFrame>
  );
};

export default TopBar;
