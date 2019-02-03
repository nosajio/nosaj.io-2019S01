import styled, {
  ThemedStyledInterface,
  StyledFunction,
  StyledComponent,
  StyledInterface,
  AnyStyledComponent
} from 'styled-components';
import { CapsLinkProps } from '.';
import { Link } from 'react-router-dom';
import { Theme } from '../../styled/theme';

// type CapsLinkElement = (props: CapsLinkProps) =>

export const capsLinkElement = (props: CapsLinkProps): AnyStyledComponent =>
  styled(props.to ? Link : 'span')(
    ({ theme }: { theme: Theme }) => `
  color: black;
  text-transform: uppercase;
  font: ${theme.fonts.c.weight.heavyCondensed} ${theme.ms.rem(1)} ${theme.fonts.c.family};
`);
