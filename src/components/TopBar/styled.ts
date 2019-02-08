import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Theme } from '../../styled/theme';
import Button from '../Button';
import { StyledWithProps } from '../../types/styled';
import { halfMarginPrcnt } from '../../styled/grid';

export interface TBStyledProps {
  theme: Theme;
}

export const TBarFrame: StyledWithProps<TBStyledProps> = styled.header`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  ${({ theme }: TBStyledProps) => `
    z-index: ${theme.layers.nav};
    padding: ${halfMarginPrcnt}%;
  `}
`;
export const TBarNav = styled.nav``;
export const TBarLogo = styled(Link)``;
export const TBarLink = styled(Link)`
  ${({ theme }: TBStyledProps) => `
    margin: 0 ${theme.ms.fn(3) / 2}rem;
    font: ${theme.fonts.a.weight.bold} 1rem ${theme.fonts.a.family};
  `}
  text-transform: uppercase;
  text-decoration: none;
`;
export const TBarBtn = styled(Button)``;
