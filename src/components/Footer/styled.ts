import media from '../../styled/media';
import { styled } from '../../styled/theme';
import borderUnderline from '../../styled/border-underline';

export const FooterFrame = styled.footer`
  ${({ theme }) => theme.mobilegrid()}
  ${media.medium`${({ theme }) => theme.innergrid(12)}`}
  grid-row-gap: ${({ theme }) => theme.ms.rem(2)};
  
  margin: ${({ theme }) => `${theme.ms.rem(4)} auto ${theme.ms.rem(2)}`};
  text-transform: uppercase;
  letter-spacing: 1.5;
  font-size: 15px;
  line-height: 2;
`;

export const FooterLinks = styled.div`
  grid-column: main / main 2;
  grid-row: 1;
`;

export const FooterLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  ${({ theme }) => borderUnderline(theme.colors.grey.neutral)};

  & + & {
    margin-left: ${({ theme }) => theme.ms.rem(1)};
  }
`;

export const FooterLogo = styled.div`
  grid-row: 3;
  width: 51px;
  height: 42px;
  background: no-repeat url('/logoblack.svg') center / 100% auto;
  justify-self: end;
  grid-column: main;

  ${media.medium`
    grid-column: 11;
  `}
`;

export const FooterCopyright = styled.div`
  grid-row: 2;
  grid-column: main / main 2;
`;

export const FooterMadeInEngland = styled.div`
  grid-row: 3;
  grid-column: main;
  padding-top: 8px;

  img {
    display: block;
    width: 40px;
    height: auto;
  }
`;
