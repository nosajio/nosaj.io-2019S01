import media from '../../styled/media';
import { styled } from '../../styled/theme';
import Button from '../Button';
import CapsLink from '../CapsLink';

export const OpenerFrame = styled.div(
  ({ theme }) => `
  grid-column: main / main 2;
  position: relative;
  margin-top: 14vh;
`
);

export const OpenerHR = styled.div`
  margin-bottom: ${({ theme }) => theme.ms.rem(1)};
  width: ${({ theme }) => theme.ms.rem(4)};
  height: 10px;
  background: black;

  ${media.medium`
    width: ${({ theme }) => theme.grid(2)}%;
  `}
`;

export const OpenerHeadline = styled.h1`
  position: relative;
  width: 100%;
  text-transform: uppercase;
  line-height: 1;
  ${({ theme: { ms, fonts } }) => `
    font-size: ${ms.rem(3)};
    font-family: ${fonts.b.family};
    font-weight: ${fonts.b.weight.heavy};
  `}
  ${media.large`
    font-size: ${({ theme }) => theme.ms.rem(4)};
    max-width: ${({ theme }) => theme.grid(7)}vw;
  `};
`;

export const OpenerLinks = styled.div`
  grid-column: main / main 2;
  display: flex;
  flex-flow: column nowrap;
  margin-top: ${({ theme }) => theme.ms.rem(2)};
  align-items: flex-start;

  ${media.medium`
    align-items: center;
    flex-flow: row nowrap;
  `}
`;

export const OpenerLink = styled(CapsLink)`
  * + & {
    margin-top: ${({ theme }) => theme.ms.rem(1)};
  }
  ${media.medium`
    ${({ theme }) => `* + & { 
      margin: 0 0 0 ${theme.ms.rem(3)}; 
      font-size: ${theme.ms.rem(1)};
    }`}
  `}
`;

export const OpenerButton = styled(Button)`
  * + & {
    margin-top: ${({ theme }) => theme.ms.rem(1)};
  }
  ${media.medium`
    ${({ theme }) => `* + & { margin: 0 0 0 ${theme.ms.rem(3)}; }`}
  `}
`;
