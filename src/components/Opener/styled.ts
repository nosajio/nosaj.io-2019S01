import styled from 'styled-components';
import { media, Theme } from '../../styled/theme';
import Button from '../Button';
import CapsLink from '../CapsLink';

export const OpenerFrame = styled.div(
  ({ theme }: { theme: Theme }) => `
  grid-area: main;
  position: relative;
  margin-top: 14vh;
`
);

export const OpenerHR = styled.div`
  width: ${({ theme }: { theme: Theme }) => theme.grid(4)}%;
  margin-bottom: ${({ theme }: { theme: Theme }) => theme.ms.rem(1)};
  grid-column: 1 / 4;
  height: 10px;
  background: black;
`;

export const OpenerHeadline = styled.h1`
  ${({ theme: { ms, fonts, grid } }: { theme: Theme }) => `
    position: relative;
    width: 100%;
    font-size: ${ms.rem(2)};
    font-family: ${fonts.c.family};
    font-weight: ${fonts.c.weight.heavyCondensed};
    text-transform: uppercase;
    line-height: 1;
  `}
  ${media.large`
    font-size: ${({ theme }: { theme: Theme }) => theme.ms.rem(4)};
    max-width: ${({ theme }: { theme: Theme }) => theme.grid(7)}vw;
  `};
`;

export const OpenerLinks = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-top: ${({ theme }: { theme: Theme }) => theme.ms.rem(2)};
`;

export const OpenerLink = styled(CapsLink)(
  ({ theme }: { theme: Theme }) => `
  * + & { margin-left: ${theme.ms.rem(3)}; }
`
);

export const OpenerButton = styled(Button)(
  ({ theme }: { theme: Theme }) => `
  * + & { margin-left: ${theme.ms.rem(3)}; }
`
);
