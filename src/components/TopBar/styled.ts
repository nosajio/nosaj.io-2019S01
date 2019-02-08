import { Link } from 'react-router-dom';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { halfMarginPrcnt } from '../../styled/grid';
import { Theme } from '../../styled/theme';
import { StyledWithProps } from '../../types/styled';
import Button from '../Button';

export interface TBStyledProps {
  theme: Theme;
  isVisible?: boolean;
}

const elementTransitionIn = (
  isVisible: boolean,
  duration: number,
  delay?: number
): string => `
  transition: 
    transform ${duration}ms ${delay ? `${delay}ms` : ''} ease-in-out, 
    opacity ${duration}ms ${delay ? `${delay}ms` : ''};

  ${isVisible ? `` : 'transform: translate3d(0, -50px, 0); opacity: 0;'}
`;

const animateNth = (
  max: number,
  { isVisible }: TBStyledProps
): FlattenSimpleInterpolation => {
  let o = '';
  for (let n = 1; n < max; n++) {
    o += `
      *:nth-child(${n}) {
        ${elementTransitionIn(Boolean(isVisible), 180, (n - 1) * 50)}
      }
    `;
  }
  return css`
    ${o}
  `;
};

export const TBarFrame: StyledWithProps<TBStyledProps> = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  ${({ theme }: TBStyledProps) => `
    z-index: ${theme.layers.nav};
    padding: ${halfMarginPrcnt}%;
    transition: all 200ms ease-in-out;
  `}
`;

export const TBarLogo = styled(Link)``;

export const TBarNav: StyledWithProps<TBStyledProps> = styled.nav`
  ${(props: TBStyledProps) => animateNth(5, props)}
`;

export const TBarLink: StyledWithProps<TBStyledProps> = styled(Link)`
  ${({ theme }: TBStyledProps) => `
    padding: calc(${theme.ms.rem(-1)} - 2px) ${theme.ms.rem(1)} ${theme.ms.rem(
    -1
  )};
    margin: 0 ${(theme.ms.fn(2) - theme.ms.fn(1)) / 2}rem;
    font: ${theme.fonts.a.weight.bold} 1rem ${theme.fonts.a.family};
    `}
  display: inline-block;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 30px;
  text-decoration: none;
  &:hover {
    background: white;
  }
`;

export const TBarBtn = styled(Button)`
  ${TBarLink} + &,
  & + & {
    margin-left: ${({ theme }: TBStyledProps) =>
      (theme.ms.fn(2) - theme.ms.fn(1)) / 2}rem;
  }
`;
