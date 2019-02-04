import { Link } from 'react-router-dom';
import styled, { AnyStyledComponent } from 'styled-components';
import { Theme } from '../../styled/theme';

export interface ButtonBaseProps {
  theme: Theme;
  to?: string;
  href?: string;
}

export const ButtonBase = ({ to }: ButtonBaseProps) =>
  styled(to ? Link : 'a')(
    ({ theme }: ButtonBaseProps) => `
    display: inline-block;
    border-radius: 50px;
    background: black;
    color: white;
  `
  );

export const RegularButton = styled(Link)(
  ({ theme }: ButtonBaseProps) => `
    color: red;
    display: inline-block;
    border-radius: 50px;
    background: black;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    padding: calc(${theme.ms.rem(-1)} - 2px) ${theme.ms.rem(1)} ${theme.ms.rem(
    -1
  )};
    font: ${theme.fonts.c.weight.heavyCondensed} ${theme.ms.rem(1)} ${
    theme.fonts.c.family
  };
`
);
