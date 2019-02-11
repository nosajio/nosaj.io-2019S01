import styled from 'styled-components';
import { Theme } from '../../styled/theme';
import { StyledWithProps } from '../../types/styled';

export interface CSTextStyledProps {
  theme: Theme;
}

export const CSTextP: StyledWithProps<CSTextStyledProps> = styled.p`
  font-size: ${({ theme }: CSTextStyledProps) => theme.ms.rem(1)};
  grid-column: 4 / 10;
  margin: 0;
`;
