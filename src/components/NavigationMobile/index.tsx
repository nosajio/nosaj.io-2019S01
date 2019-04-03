import * as React from 'react';
import noop from '../../utils/noop';
import {
  MobileNavEtc,
  MobileNavFrame,
  MobileNavLink,
  MobileNavLinks,
  MobileNavLogo
} from './styled';

interface NavigationMobileProps {
  onClickLink?: (e: React.MouseEvent) => void;
}

const NavigationMobile: React.FunctionComponent<NavigationMobileProps> = ({
  onClickLink
}) => {
  return (
    <MobileNavFrame>
      <MobileNavLinks>
        <MobileNavLogo
          onClick={e => (onClickLink ? onClickLink(e) : noop())}
          to="/"
        />
        <MobileNavLink
          onClick={e => (onClickLink ? onClickLink(e) : noop())}
          to="/#work"
        >
          Work
        </MobileNavLink>
        <MobileNavLink
          onClick={e => (onClickLink ? onClickLink(e) : noop())}
          to="/services"
        >
          Services
        </MobileNavLink>
        <MobileNavLink
          onClick={e => (onClickLink ? onClickLink(e) : noop())}
          to="#contact"
        >
          Contact
        </MobileNavLink>
      </MobileNavLinks>
      <MobileNavEtc>
        NSJ2019S01.{process.env.REACT_APP_PKG_VERSION}
      </MobileNavEtc>
    </MobileNavFrame>
  );
};

export default NavigationMobile;
