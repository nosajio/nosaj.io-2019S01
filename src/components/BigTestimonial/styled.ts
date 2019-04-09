import styled from 'styled-components';
import media from '../../styled/media';
import { Theme } from '../../styled/theme';

export const BigTestimonialFrame = styled.blockquote`
  display: flex;
  flex-flow: column nowrap;
  padding: 0;
  margin: 0;
  text-align: center;
`;

export const BigTestimonialQuote = styled.p`
  margin: 0;
  font: ${({ theme }: { theme: Theme }) => `
     ${theme.fonts.a.weight.regular} ${theme.ms.rem(1)} ${theme.fonts.a.family};
  `};
  ${media.medium`
    font-size: ${({ theme }) => theme.ms.rem(2)}
  `}

  &::before {
    content: '';
    display: block;
    margin: 0 auto ${({ theme }) => theme.ms.rem(3)};
    background: no-repeat url('/quote-small-blackish.svg') center / 100% auto;
    width: 26px;
    height: 20px;
  }
`;

export const BigTestimonialBy = styled.div`
  font-size: 1rem;
  margin-top: ${({ theme }: { theme: Theme }) => theme.ms.rem(1)};
`;
