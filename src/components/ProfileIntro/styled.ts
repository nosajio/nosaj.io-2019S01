import { styled } from '../../styled/theme';
import media from '../../styled/media';

export const ProfileIntroFrame = styled.div`
  ${({ theme }) => theme.innergrid(10)}
  align-items: start;
  grid-column: main / main 2;
`;

export const ProfileIntroImg = styled.img`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  grid-row: 1;
  grid-column: 3 / 9;
  box-shadow: 0 6px 30px 3px rgba(0, 0, 0, 0.22);
  border-radius: 12px;
  top: ${({ theme }) => theme.ms.rem(2)};

  ${media.medium`
    grid-column: 4 / 8;
  `}

  ${media.large`
    grid-column: 1 / 5;
    top: -${({ theme }) => theme.ms.rem(3)};
  `}
`;

export const ProfileIntroCard = styled.div`
  position: relative;
  width: 100%;
  background: white;
  grid-row: 2;
  grid-column: main / main 2;
  color: black;
  box-shadow: 0 6px 25px 5px rgba(0, 0, 0, 0.20);
  border-radius: 12px;
  text-align: center;
  padding: ${({ theme }) => `calc(${theme.ms.rem(3)} + 1rem) ${theme.ms.rem(2)} ${theme.ms.rem(2)}`};

  ${media.large`
    grid-row: 1;
    grid-column: 2 / 11;
    text-align: left;
    ${({ theme }) => `
      ${theme.innergrid(9)}
      padding: ${theme.ms.rem(3)};
      bottom: -${theme.ms.rem(3)};
    `}
  `}

  p {
    grid-column: 4 / 10;
    margin: 0;
    font-size: 1rem;
    ${media.medium`
      font-size: ${({ theme }) => theme.ms.rem(1)};
    `}
  }
`;
