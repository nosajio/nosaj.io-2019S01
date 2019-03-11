import * as React from 'react';
import { NavFrame, NavLink } from './styled';
import noop from '../../utils/noop';

interface NavigationDesktopProps {
  onClickLink?: (e: React.MouseEvent) => void;
}

const NavigationDesktop: React.FunctionComponent<NavigationDesktopProps> = ({
  onClickLink
}) => {
  return (
    <NavFrame>
      <NavLink
        onClick={e => (onClickLink ? onClickLink(e) : noop())}
        to="/#work"
      >
        Work
      </NavLink>
      <NavLink
        onClick={e => (onClickLink ? onClickLink(e) : noop())}
        to="/services"
      >
        Services for startups
      </NavLink>
      <NavLink
        onClick={e => (onClickLink ? onClickLink(e) : noop())}
        to="#contact"
      >
        Contact
      </NavLink>
      {/* <NavBtn caps bgColor="#FFE793" fgColor="black" to="#contact">
          Hire me for your next project
        </NavBtn> */}
    </NavFrame>
  );
};

export default NavigationDesktop;
