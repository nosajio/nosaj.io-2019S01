import styled from 'styled-components';
import { Theme } from '../../styled/theme';
import { StyledWithProps } from '../../types/styled';

type WindowStyledProps = {
  padding?: string | number;
  theme: Theme;
};

export const WindowOverlay = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.7);
  padding-top: ${({ theme }: WindowStyledProps) => theme.ms.rem(4)};
  z-index: ${({ theme }: WindowStyledProps) => theme.layers.windows};
`;

export const WindowFrame: StyledWithProps<WindowStyledProps> = styled.div`
  width: 100%;
  max-width: 1200px;
  background: ${({ theme: { colors } }: WindowStyledProps) =>
    colors.blue.black};
  color: white;
  box-shadow: 0 7px 40px 3px rgba(49, 31, 75, 0.49);
  border-radius: 24px;
  border: 2px solid
    ${({ theme }: WindowStyledProps) => theme.colors.purple.bright};
  padding: ${({ theme, padding }: WindowStyledProps) =>
    typeof padding === 'number'
      ? theme.ms.rem(padding)
      : typeof padding === 'string'
      ? padding
      : theme.ms.rem(2)};
`;
