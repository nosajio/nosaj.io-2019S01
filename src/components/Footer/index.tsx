import * as React from 'react';
import { FooterFrame } from './styled';

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = props => {
  return (
    <FooterFrame>
      <img src="/unionjack.svg" alt="" /> Made in England
    </FooterFrame>
  );
};

export default Footer;
