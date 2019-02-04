import * as React from 'react';
import { RegularButton } from './styled';

interface ButtonProps {
  to: string;
}

const Button: React.SFC<ButtonProps> = ({ to, ...passProps }) => {
  return <RegularButton to={to} {...passProps} />;
};

export default Button;
