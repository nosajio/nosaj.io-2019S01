import { Link } from 'react-router-dom';
import { halfMarginPrcnt } from '../../styled/grid';
import media from '../../styled/media';
import { styled, Theme } from '../../styled/theme';

export interface TBStyledProps {
  isVisible?: boolean;
  isLight?: boolean;
  withText?: string;
}

export const TBarFrame = styled.header<TBStyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 300ms ease-in-out;
  padding: 1rem;

  ${media.large`
    padding: ${halfMarginPrcnt}vw
  `}
`;

export const TBarLogo = styled(Link)``;

export const ToggleMobileNav = styled.div<TBStyledProps>`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: ${({ theme }) => theme.layers.ceiling};
  display: flex;
  flex-flow: column nowrap;
  cursor: pointer;

  &::after {
    content: '${({ withText }) => (withText ? withText : 'Nav')}';
    text-transform: uppercase;
    font: ${({
      theme: {
        ms,
        fonts: { c: font }
      }
    }) => `${font.weight.condensed} 1rem ${font.family}`};
  }
`;

export const ToggleMobileNavBars = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: ${({ theme }) => theme.ms.rem(-1)};
  margin-bottom: ${({ theme }) => theme.ms.rem(-3)};

  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background: black;
  }
`;
