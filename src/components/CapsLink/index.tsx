import * as React from 'react';
import { StyledComponent } from 'styled-components';
import { capsLinkElement } from './styled';

export interface CapsLinkProps {
  to?: string;
  href?: string;
}

const CapsLink: React.FunctionComponent<CapsLinkProps> = props => {
  const Link = capsLinkElement(props);
  return <Link {...props} />;
};

export default CapsLink;
