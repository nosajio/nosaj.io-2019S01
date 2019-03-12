import { Link } from 'react-router-dom';
import { halfMarginPrcnt } from '../../styled/grid';
import media from '../../styled/media';
import { styled } from '../../styled/theme';

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

export const TBarLogo = styled.div``;

export const LogoLink = styled(Link)`
  text-decoration: none;
`;

export const UnderLogoText = styled.div`
  margin-top: ${({ theme }) => theme.ms.rem(-2)};
  padding-top: ${({ theme }) => theme.ms.rem(-4)};
  text-transform: uppercase;
  width: 100%;
  min-width: ${({ theme }) => theme.grid(1)}vw;
  border-top: 1px solid black;
  font: ${({ theme: { fonts } }) =>
    `${fonts.c.weight.condensed} 15px ${fonts.c.family}`};
`;

export const ToggleNav = styled.div<TBStyledProps>`
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

export const ToggleNavBars = styled.div`
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
