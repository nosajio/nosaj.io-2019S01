import { Theme } from '../../styled/theme';
import styled from 'styled-components';

export const ProfileIntroFrame = styled.div`
  ${({ theme }: { theme: Theme }) => theme.innergrid(10)}
  grid-column: 2 / 12;
  align-items: start;
`;

export const ProfileIntroImg = styled.img`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  grid-column: 1 / 5;
  grid-row: 1;
  box-shadow: 0 6px 30px 5px rgba(0, 0, 0, 0.22);
  border-radius: 12px;
  ${({ theme }: { theme: Theme }) => `
    top: -${theme.ms.rem(3)};
    `}
`;

export const ProfileIntroCard = styled.div`
  position: relative;
  grid-column: 2 / 11;
  grid-row: 1;
  width: 100%;
  background: black;
  color: white;
  box-shadow: 0 6px 30px 5px rgba(0, 0, 0, 0.22);
  border-radius: 12px;

  ${({ theme }: { theme: Theme }) => `
    ${theme.innergrid(9)}
    padding: ${theme.ms.rem(3)};
    bottom: -${theme.ms.rem(3)};
  `}

  p {
    grid-column: 4 / 10;
    margin: 0;
    ${({ theme }: { theme: Theme }) => `
      font-size: ${theme.ms.rem(1)};
    `}
  }
`;
