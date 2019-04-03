import * as React from 'react';
import {
  FooterCopyright,
  FooterFrame,
  FooterLogo,
  FooterMadeInEngland,
  FooterLink,
  FooterLinks
} from './styled';

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = props => {
  return (
    <FooterFrame>
      <FooterLinks>
        <FooterLink
          href="https://github.com/nosajio/nosaj.io-2019S01"
          target="_blank"
        >
          {'</'}Source code{'>'}
        </FooterLink>
        <FooterLink href="https://twitter.com/__nosaj" target="_blank">
          Twitter
        </FooterLink>
        <FooterLink href="https://blog.nosaj.io">Blog</FooterLink>
      </FooterLinks>
      <FooterCopyright>
        &copy; Copyright Nosaj ltd {new Date().getFullYear()} all rights
        reserved
        <br />
        UK LIMITED COMPANY &#8470; 10687980
      </FooterCopyright>
      <FooterLogo />
      <FooterMadeInEngland>
        <img
          src="/unionjack.svg"
          alt="Made in England"
          title="Made in England"
        />
      </FooterMadeInEngland>
    </FooterFrame>
  );
};

export default Footer;
