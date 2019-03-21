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
     ${theme.fonts.a.weight.bold} ${theme.ms.rem(1)} ${theme.fonts.a.family};
  ${media.medium`
    font-size: ${({ theme }) => theme.ms.rem(2)}
  `}
  `};
`;

export const BigTestimonialBy = styled.div`
  font-size: 1rem;
  margin-top: ${({ theme }: { theme: Theme }) => theme.ms.rem(1)};
`;
