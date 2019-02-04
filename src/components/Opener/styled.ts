import styled from 'styled-components';
import { Theme } from '../../styled/theme';
import CapsLink from '../CapsLink';
import Waves from '../Waves';
import Button from '../Button';

export const OpenerFrame = styled.div(
  ({ theme }: { theme: Theme }) => `
  grid-column: 2 / 12;
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

export const OpenerHeadline = styled.h1(
  ({ theme: { ms, fonts, grid } }: { theme: Theme }) => `
  position: relative;
  width: 100%;
  max-width: ${grid(7)}vw;
  font-family: ${fonts.c.family};
  font-size: ${ms.rem(4)};
  font-weight: ${fonts.c.weight.heavyCondensed};
  text-transform: uppercase;
  line-height: 1;
`
);

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
