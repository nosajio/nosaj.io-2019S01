import * as React from 'react';
import {
  ServicesCTAFrame,
  ServicesCTAHead,
  ServicesCTAText,
  ServicesCTABtn
} from './styled';
import { ButtonSizes } from '../Button/styled';
import theme from '../../styled/theme';

interface AvailableCTAProps {
  title: string;
  text: string;
  button: string;
}

const AvailableCTA: React.FunctionComponent<AvailableCTAProps> = ({
  title,
  text,
  button
}) => {
  return (
    <ServicesCTAFrame>
      <ServicesCTAHead>{title}</ServicesCTAHead>
      <ServicesCTAText>
        <p>{text}</p>
        <ServicesCTABtn
          condensed
          caps
          bgColor={theme.colors.teal.bright}
          size={ButtonSizes.large}
          to="#contact"
        >
          {button}
        </ServicesCTABtn>
      </ServicesCTAText>
    </ServicesCTAFrame>
  );
};

export default AvailableCTA;
