import * as React from 'react';
import { mediaRules } from '../../styled/media';
import Logo from '../Logo';
import Media from '../Media';
import { TBarFrame, TBarLink, TBarLogo, TBarNav } from './styled';

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
        <Logo color={light ? '#fff' : '#000'} />
      </TBarLogo>
      <Media min={mediaRules[1].min}>
        <TBarNav isLight={light} isVisible={showNav}>
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
