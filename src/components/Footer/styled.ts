import styled from 'styled-components';
import { Theme } from '../../styled/theme';

export const FooterFrame = styled.footer`
  ${({ theme }: { theme: Theme }) => theme.innergrid(12)}
  margin: ${({ theme }: { theme: Theme }) => theme.ms.rem(4)} auto ${({ theme }: { theme: Theme }) => theme.ms.rem(2)};
  text-transform: uppercase;
  letter-spacing: 1.5;
  font-size: 15px;
  line-height: 2;
`;

export const FooterLogo = styled.div`
  grid-row: 1;
  grid-column: main;
  justify-self: end;
  width: 51px;
  height: 42px;
  background: no-repeat url('/logoblack.svg') center / 100% auto;
`;

export const FooterCopyright = styled.div`
  grid-row: 1;
  grid-column: main / span 12;
`;

export const FooterMadeInEngland = styled.div`
  grid-row: 2;
  grid-column: main / span 12;
  padding-top: 8px;

  img {
    display: block;
    width: 40px;
    height: auto;
  }
`;
