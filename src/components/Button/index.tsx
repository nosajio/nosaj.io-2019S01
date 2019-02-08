import * as React from 'react';
import { RegularButton, ButtonSizes } from './styled';

interface ButtonProps {
  to: string;
  size?: ButtonSizes;
  condensed?: Boolean;
  bgColor?: string;
  fgColor?: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  to,
  condensed = false,
  size,
  ...passProps
}) => {
  return (
    <RegularButton
      to={to}
      withSize={size}
      withCondensedFont={condensed}
      {...passProps}
    />
  );
};

export default Button;
