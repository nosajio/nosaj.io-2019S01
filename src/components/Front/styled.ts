import { styled, Theme } from '../../styled/theme';
import Page from '../Page';
import ProfileIntro from '../ProfileIntro';
import Waves from '../Waves';

export const FrontMain = styled(Page)``;

export const WavesFixed = styled(Waves)`
  z-index: ${({ theme }) => theme.layers.background};
  position: absolute;
  top: 0;
  left: 0;
`;

export const NosajIntro = styled(ProfileIntro)``;
