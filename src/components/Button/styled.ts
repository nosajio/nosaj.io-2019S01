import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Fonts } from '../../styled/fonts';
import { ModScale } from '../../styled/modularscale';
import { Theme } from '../../styled/theme';

export enum ButtonSizes {
  small = 's',
  medium = 'm',
  large = 'l'
}

export interface ButtonBaseProps {
  theme: Theme;
  bgColor?: string;
  fgColor?: string;
  withSize?: ButtonSizes;
  withCaps?: boolean;
  withCondensedFont: boolean;
  to?: string;
  href?: string;
}

const paddingForSize = (s: ButtonSizes, ms: ModScale): string => {
  switch (s) {
    case ButtonSizes.large:
      return `calc(${ms.rem(-1)} - 2px) ${ms.rem(1)} ${ms.rem(-1)}`;
    case ButtonSizes.medium:
      return `calc(${ms.rem(-1)} - 2px) ${ms.rem(1)} ${ms.rem(-1)}`;
    case ButtonSizes.small:
      return `calc(${ms.rem(-3)} - 1px) 1rem ${ms.rem(-3)}`;
  }
};

const fontSizeforSize = (s: ButtonSizes, ms: ModScale): string => {
  switch (s) {
    case ButtonSizes.large:
      return ms.rem(1);
    case ButtonSizes.medium:
      return '1rem';
    case ButtonSizes.small:
      return '1rem';
  }
};

const buttonFontFamily = (condensed: Boolean = false, fonts: Fonts) => {
  switch (condensed) {
    case true:
      return fonts.c.family;
    default:
      return fonts.a.family;
  }
};
const buttonFontWeight = (condensed: Boolean = false, fonts: Fonts) => {
  switch (condensed) {
    case true:
      return fonts.c.weight.heavyCondensed;
    default:
      return fonts.a.weight.bold;
  }
};

export const ButtonBase = ({ to }: ButtonBaseProps) =>
  styled(to ? Link : 'a')(
    ({ theme, bgColor, fgColor }: ButtonBaseProps) => `
    display: inline-block;
    border-radius: 50px;
    background: ${bgColor ? bgColor : 'black'};
    color: ${fgColor ? fgColor : 'white'};
  `
  );

export const RegularButton = styled(
  // Remap the props on Link so the typechecker doesn't complain about
  // unrecognized props. This also allows for switching elements for
  // different types of button behaviours
  ({ bgColor, fgColor, withCondensedFont, withSize, to, href, ...rest }) =>
    React.createElement(to ? Link : href ? 'a' : 'span', { to, ...rest })
)(
  ({
    theme,
    bgColor,
    fgColor,
    withCondensedFont,
    withCaps,
    withSize = ButtonSizes.medium
  }: ButtonBaseProps) => `
    display: inline-block;
    background: ${bgColor ? bgColor : 'black'};
    color: ${fgColor ? fgColor : 'white'};
    border-radius: 50px;
    ${withCaps ? `text-transform: uppercase;` : ''}
    text-decoration: none;
    padding: ${paddingForSize(withSize, theme.ms)};
    box-shadow: 0 3px 18px 2px rgba(0, 0, 0, 0.18);
    cursor: pointer;
    font: ${buttonFontWeight(withCondensedFont, theme.fonts)} ${fontSizeforSize(
    withSize,
    theme.ms
  )} ${buttonFontFamily(withCondensedFont, theme.fonts)};
`
);
