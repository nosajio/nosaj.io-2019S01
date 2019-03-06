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
    width: ${({ theme }) => theme.grid(4)}%;
  `}
`;

export const OpenerHeadline = styled.h1`
  position: relative;
  width: 100%;
  text-transform: uppercase;
  line-height: 1;
  ${({ theme: { ms, fonts } }) => `
    font-size: ${ms.rem(2)};
    font-family: ${fonts.c.family};
    font-weight: ${fonts.c.weight.heavyCondensed};
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

  ${media.large`
    align-items: center;
    flex-flow: row nowrap;
  `}
`;

export const OpenerLink = styled(CapsLink)`
  ${media.large`
    ${({ theme }) => `* + & { margin-left: ${theme.ms.rem(3)}; }`}
  `}
`;

export const OpenerButton = styled(Button)`
${media.large`
  ${({ theme }) => `* + & { margin-left: ${theme.ms.rem(3)}; }`}
`}
`;
