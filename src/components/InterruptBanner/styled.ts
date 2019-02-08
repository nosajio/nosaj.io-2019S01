import styled from 'styled-components';
import { ThemeProps, StyledWithProps } from '../../types/styled';

export type IBStyledProps = ThemeProps & {};

export const IBFrame: StyledWithProps<IBStyledProps> = styled.section`
  ${({ theme }: IBStyledProps) => `
    ${theme.innergrid(12)}
    padding: ${theme.ms.rem(4)} 0;
  `}
  background: #EDEBF9 no-repeat url('/bg/waves-blue.svg') center / cover;
`;

export const IBCard: StyledWithProps<IBStyledProps> = styled.div`
  grid-column: 3 / 11;
  background: black;
  color: white;
  text-align: center;
  padding: ${({ theme }: IBStyledProps) => theme.ms.rem(3)};
  border-radius: 12px;
  box-shadow: 0 6px 30px 5px rgba(0, 0, 0, 0.22);

  p {
    font-size: ${({ theme }: IBStyledProps) => theme.ms.rem(1)};
  }
`;
