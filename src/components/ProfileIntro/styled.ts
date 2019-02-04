import { Theme } from '../../styled/theme';
import styled from 'styled-components';

export const ProfileIntroFrame = styled.div`
  position: relative;
  grid-column: 2 / 12;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ProfileIntroImg = styled.img`
  ${({ theme }: { theme: Theme }) => `
    position: absolute;
    z-index: 10;
    left: 0;
    bottom: 0;
    width: ${theme.grid(4)}vw;
    max-width: 480px;
    height: auto;
  `}
  box-shadow: 0 6px 30px 5px rgba(0, 0, 0, 0.22);
  border-radius: 12px;
`;

export const ProfileIntroCard = styled.div`
  ${({ theme }: { theme: Theme }) => `
    position: relative;
    z-index: 2;
    bottom: -${theme.ms.rem(2)};
    width: 100%;
    max-width: ${theme.grid(8)}vw;
    padding: 
      ${theme.ms.rem(3)} 
      ${theme.ms.rem(2)} 
      ${theme.ms.rem(3)}
      calc(${theme.grid(2)}vw + ${theme.ms.rem(3)});
  `}

  background: white;
  box-shadow: 0 6px 30px 5px rgba(0, 0, 0, 0.22);
  border-radius: 12px;

  p {
    margin: 0;
    ${({ theme }: { theme: Theme }) => `
      font-size: ${theme.ms.rem(1)};
    `}
  }
`;
