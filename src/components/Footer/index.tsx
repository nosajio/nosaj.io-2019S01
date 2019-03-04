import * as React from 'react';
import {
  FooterCopyright,
  FooterFrame,
  FooterLogo,
  FooterMadeInEngland
} from './styled';

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = props => {
  return (
    <FooterFrame>
      <FooterCopyright>
        &copy; Copyright Nosaj ltd {new Date().getFullYear()} all rights
        reserved
        <br />
        UK LIMITED COMPANY &#8470; 10687980
      </FooterCopyright>
      <FooterLogo />
      <FooterMadeInEngland>
        <img src="/unionjack.svg" alt="Made in England" title="Made in England" /> 
      </FooterMadeInEngland>
    </FooterFrame>
  );
};

export default Footer;
