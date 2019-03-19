import { Link } from 'react-router-dom';
import { AnyStyledComponent } from 'styled-components';
import { CapsLinkProps } from '.';
import { styled } from '../../styled/theme';

export const capsLinkElement = (props: CapsLinkProps): AnyStyledComponent =>
  styled(props.to ? Link : 'a')(
    ({ theme }) => `
  color: black;
  text-transform: uppercase;
  font: ${theme.fonts.b.weight.heavy} ${theme.ms.rem(1)} ${
      theme.fonts.b.family
    };
`
  );
