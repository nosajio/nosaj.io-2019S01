import { Link } from 'react-router-dom';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { halfMarginPrcnt } from '../../styled/grid';
import { Theme } from '../../styled/theme';
import { StyledWithProps } from '../../types/styled';
import Button from '../Button';

export interface TBStyledProps {
  theme: Theme;
  withPadding?: string;
  isVisible?: boolean;
  isLight?: boolean;
}

export const TBarFrame: StyledWithProps<TBStyledProps> = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 300ms ease-in-out;
  ${({ theme, withPadding }: TBStyledProps) => `
    z-index: ${theme.layers.nav};
    padding: ${withPadding || `${halfMarginPrcnt}vw`};
    transition: all 200ms ease-in-out;
  `}
`;

export const TBarLogo = styled(Link)``;

export const TBarLink: StyledWithProps<TBStyledProps> = styled(Link)`
  ${({ theme }: TBStyledProps) => `
    margin: 0 ${theme.ms.fn(2) / 2}rem;
    font: ${theme.fonts.a.weight.bold} 1rem ${theme.fonts.a.family};
    `}
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
`;

export const TBarNav: StyledWithProps<TBStyledProps> = styled.nav`
  ${TBarLink} {
    color: ${({ isLight }: TBStyledProps) => (isLight ? '#fff' : '#000')};
  }
`;

export const TBarBtn = styled(Button)`
  ${TBarLink} + &,
  & + & {
    margin-left: ${({ theme }: TBStyledProps) =>
      (theme.ms.fn(2) - theme.ms.fn(1)) / 2}rem;
  }
`;
