import * as React from 'react';
import { RegularButton, ButtonSizes } from './styled';

interface ButtonProps {
  to?: string;
  size?: ButtonSizes;
  condensed?: boolean;
  caps?: boolean;
  onClick?: (val: string) => void;
  bgColor?: string;
  fgColor?: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  condensed = false,
  caps = false,
  size,
  ...passProps
}) => {
  return (
    <RegularButton
      withCaps={caps}
      withSize={size}
      withCondensedFont={condensed}
      {...passProps}
    />
  );
};

export default Button;
