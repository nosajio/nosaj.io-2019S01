import { styled } from '../../styled/theme';
import Button from '../Button';
import Page from '../Page';
import ProfileIntro from '../ProfileIntro';
import media from '../../styled/media';

export const FrontMain = styled(Page)``;

export const FrontWaves = styled.div`
  background: no-repeat url('/bg/waves-front-grad.svg') bottom left / cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: ${({ theme }) => theme.layers.background};
`;

// Intro section - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const NosajIntro = styled(ProfileIntro)``;

// Process section - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
export const ProcessFrame = styled.section`
  text-align: center;
  background: ${({ theme }) => theme.colors.blackish} no-repeat
    url('/bg/waves-navy-stroke-masked.svg') center / cover;
  color: white;
  padding: ${({ theme }) => theme.ms.rem(2)} 0;
`;
export const ProcessContent = styled(Page.Grid)``;
export const ProcessHead = styled.h2`
  text-transform: uppercase;
  grid-column: main / main 2;
  grid-row: 1;
  font-size: ${({ theme }) => theme.ms.rem(2)};
  font-weight: ${({ theme }) => theme.fonts.a.weight.heavy};

  &::after {
    content: '';
    display: block;
    height: 10px;
    width: 23px;
    margin: 1rem auto 0;
    background: no-repeat url('/>>>.svg') center / 100%;
  }
`;
export const ProcessText = styled.div`
  grid-row: 2;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  grid-column: main;

  ${media.medium`
    grid-column: 3 / 11;
  `}
`;
export const ProcessP = styled.p`
  font-size: ${({ theme }) => theme.ms.rem(1)};
  margin: ${({ theme }) => theme.ms.rem(2)} 0 ${({ theme }) => theme.ms.rem(3)};

  > em {
    color: ${({ theme }) => theme.colors.yellow.muted};
    font-style: normal;
  }
`;
