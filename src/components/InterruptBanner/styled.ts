import { styled } from '../../styled/theme';
import media from '../../styled/media';

export const IBFrame = styled.section`
  ${({ theme }) => theme.mobilegrid()}

  * + & {
    margin-top: ${({ theme }) => theme.ms.rem(1)};
  }

  ${media.medium`
    ${({ theme }) => `
      ${theme.innergrid(12)}
      `}
  `}
  padding: ${({ theme }) => theme.ms.rem(5)} 0;
  background: #7f82bf no-repeat url('/bg/waves-blue.svg') center / cover;
`;

export const IBCard = styled.div`
  background: ${({ theme }) => theme.colors.blackish};
  grid-column: main / main 2;
  color: white;
  text-align: center;
  padding: ${({ theme }) => theme.ms.rem(3)};
  border-radius: 12px;
  box-shadow: 0 6px 30px 5px rgba(0, 0, 0, 0.22);

  ${media.medium`
    grid-column: 3 / 11;
  `}

  p {
    font-size: ${({ theme }) => theme.ms.rem(1)};
  }
`;
