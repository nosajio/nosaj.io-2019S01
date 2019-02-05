import styled from 'styled-components';
import { Theme } from '../../styled/theme';

export const BigTestimonialFrame = styled.blockquote`
  display: flex;
  flex-flow: column nowrap;
  padding: 0;
  margin: 0;
`;

export const BigTestimonialQuote = styled.p`
  margin: 0;
  ${({ theme }: { theme: Theme }) => `
    font: ${theme.fonts.c.weight.bold} ${theme.ms.rem(1)} ${
    theme.fonts.c.family
  };
  `}
`;

export const BigTestimonialBy = styled.div`
  font-size: 1rem;
  margin-top: ${({ theme }: { theme: Theme }) => theme.ms.rem(1)};
`;
