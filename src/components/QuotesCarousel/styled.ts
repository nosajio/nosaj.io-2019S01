import styled from 'styled-components';
import { Theme } from '../../styled/theme';
import { StyledWithProps } from '../../types/styled';
import Page from '../Page';
import media from '../../styled/media';

export interface QCStyledProps {
  theme: Theme;
  withBG?: string;
  withFG?: string;
}

export const QCBackground: StyledWithProps<QCStyledProps> = styled.section`
  width: 100%;
  background: ${({ withBG = 'transparent' }: QCStyledProps) => withBG};
  padding: ${({ theme }: QCStyledProps) => `${theme.ms.rem(2)} 0`};
`;

export const QCFrame: StyledWithProps<QCStyledProps> = styled(Page.Grid)`
  color: ${({ withFG = 'black' }: QCStyledProps) => withFG};
`;

export const QCQuoteFrame = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  grid-column: main / main 2;
  ${media.medium`
    grid-column: 3 / 11;
  `}
`;
export const QCQuoteShape = styled.div`
  width: 34px;
  height: 28px;
  background: no-repeat url('/ui/open-quote-shape.svg') center / 34px auto;
  margin-bottom: ${({ theme }: QCStyledProps) => theme.ms.rem(-1)};
`;
export const QCAuthor = styled.cite`
  text-align: center;
  font-style: normal;
  margin-bottom: ${({ theme }: QCStyledProps) => theme.ms.rem(1)};
`;
export const QCQuote = styled.blockquote`
  text-align: center;
  margin: 0;
  padding: 0;
  ${({ theme }: QCStyledProps) => `
    font: 
      ${theme.fonts.a.weight.bold} 
      ${theme.ms.rem(2)} 
      ${theme.fonts.a.family};
  `}
`;
