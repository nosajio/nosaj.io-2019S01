import { styled } from '../../styled/theme';
import media from '../../styled/media';

type WindowStyledProps = {
  withPadding?: string | number;
  isGone?: boolean;
};

export const WindowView = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: center;
  padding-top: ${({ theme }) => theme.ms.rem(4)};
  z-index: ${({ theme }) => theme.layers.windows};
  overflow-y: auto;
  overflow-x: hidden;
`;

export const WindowOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.8) 85%
  );
`;

export const WindowFrame = styled.div<WindowStyledProps>`
  position: relative;
  width: 100%;
  max-width: 800px;
  border: 1px solid ${({ theme }) => theme.colors.blue.offwhite};
  background: white;
  color: black;
  box-shadow: 0 7px 40px 3px rgba(49, 31, 75, 0.49);
  border-radius: 12px;
  transition: all 300ms;
  padding: ${({ theme, withPadding }) =>
    typeof withPadding === 'number'
      ? withPadding === 0
        ? '0'
        : theme.ms.rem(withPadding)
      : typeof withPadding === 'string'
      ? withPadding
      : theme.ms.rem(1)};
  ${({ isGone = false }) =>
    isGone
      ? `
    transform: translate3d(calc(100vw), 0, 0);
  `
      : ''}

  ${media.medium<WindowStyledProps>`
    border-radius: 24px;
    padding: ${({ theme, withPadding }) =>
      typeof withPadding === 'number'
        ? withPadding === 0
          ? '0'
          : theme.ms.rem(withPadding)
        : typeof withPadding === 'string'
        ? withPadding
        : theme.ms.rem(2)};
  `}
`;
