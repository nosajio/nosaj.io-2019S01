import { Link } from 'react-router-dom';
import { halfMarginPrcnt } from '../../styled/grid';
import { styled, Theme } from '../../styled/theme';
import Button from '../Button';
import media from '../../styled/media';

export interface TBStyledProps {
  theme: Theme;
  isVisible?: boolean;
  isLight?: boolean;
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
  z-index: ${({ theme }) => theme.layers.nav};

  ${media.large`
    padding: ${halfMarginPrcnt}vw
  `}
`;

export const TBarLogo = styled(Link)``;

export const TBarLink = styled(Link)`
  ${({ theme }) => `
    margin: 0 ${theme.ms.fn(2) / 2}rem;
    font: ${theme.fonts.a.weight.bold} 1rem ${theme.fonts.a.family};
    `}
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
`;

export const TBarNav = styled.nav<TBStyledProps>`
  ${TBarLink} {
    color: ${({ isLight }) => (isLight ? '#fff' : '#000')};
  }
`;

export const TBarBtn = styled(Button)`
  ${TBarLink} + &,
  & + & {
    margin-left: ${({ theme }) => (theme.ms.fn(2) - theme.ms.fn(1)) / 2}rem;
  }
`;

export const ToggleMobileNav = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: ${({ theme }) => theme.ms.rem(2)};
  height: ${({ theme }) => theme.ms.rem(1)};
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    background: black;
    outline: 2px solid white;
  }
`;
