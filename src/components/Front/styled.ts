import { styled, Theme } from '../../styled/theme';
import Page from '../Page';
import ProfileIntro from '../ProfileIntro';

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

export const NosajIntro = styled(ProfileIntro)``;
