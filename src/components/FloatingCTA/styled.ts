import styled from 'styled-components';
import { Theme } from '../../styled/theme';

export const FloatingCTAContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 0 0 ${({ theme }: { theme: Theme }) => theme.ms.rem(2)};
  z-index: ${({ theme }: { theme: Theme }) => theme.layers.contentMax};
`;

export const FloatingCTAFrame = styled.div`
  border-radius: 100px;
  background: white;
  box-shadow: 0 6px 30px 5px rgba(69, 87, 166, 0.3);
  padding: ${({ theme }: { theme: Theme }) => theme.ms.rem(-2)};
`;
