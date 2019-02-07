import * as React from 'react';
import styled from 'styled-components';
import withGrid from '../../hocs/withGrid';
import { StyledWithProps, ThemeProps } from '../../types/styled';

export interface ThanksProps {
  className?: string;
}

export type ThanksStyledProps = ThanksProps & ThemeProps;

const Thanks: React.FunctionComponent<ThanksProps> = ({ className }) => {
  return (
    <ThanksFrame className={className}>
      <ThanksText>Thanks for visiting</ThanksText>
    </ThanksFrame>
  );
};

export default withGrid(Thanks);

const ThanksFrame = styled.div`
  text-align: center;
`;

const ThanksText: StyledWithProps<ThanksProps> = styled.h1`
  ${({ theme }: ThanksStyledProps) => `
    font: ${theme.fonts.a.weight.regular} ${theme.ms.rem(1)} ${
    theme.fonts.a.family
  };
    letter-spacing: 0.5em;
    text-transform: uppercase;
  `}
`;
