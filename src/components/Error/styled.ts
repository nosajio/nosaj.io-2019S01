import { styled } from '../../styled/theme';
import Page from '../Page';
import { Link } from 'react-router-dom';
import media from '../../styled/media';

export const ErrPage = styled(Page)`
  width: 100%;
  min-height: 100vh;
  padding-bottom: ${({ theme }) => theme.ms.rem(3)};
  color: white;
  background: black;
`;

export const ErrFrame = styled(Page.Grid)`
  margin-top: 0;
  text-align: center;
`;

export const ErrCode = styled.h1`
  font: ${({
    theme: {
      fonts: { c: font },
      ms
    }
  }) => `${font.weight.bold} ${ms.rem(4)} ${font.family}`};
  grid-row: 1;
  grid-column: main / main 2;
  @supports (-webkit-text-fill-color: transparent) {
    background: linear-gradient(to bottom, black 20%, white);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  ${media.large`
    font-size: ${({ theme }) => theme.ms.rem(7)};
  `}
`;

export const ErrMessage = styled.p`
  grid-row: 2;
  grid-column: mid;
  font-size: ${({ theme }) => theme.ms.rem(1)};
  ${media.large`
    font-size: ${({ theme }) => theme.ms.rem(2)};
  `}
`;

export const ErrLinks = styled.div`
  grid-row: 3;
  grid-column: mid;
  font-size: ${({ theme }) => theme.ms.rem(1)};
  ${media.large`
    font-size: ${({ theme }) => theme.ms.rem(2)};
  `}
`;

export const ErrLink = styled(Link)`
  color: white;
`;
