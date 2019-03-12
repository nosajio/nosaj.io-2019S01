import { keyframes } from 'styled-components';
import { styled } from '../../styled/theme';
import Button from '../Button';
import { ButtonSizes } from '../Button/styled';
import FormInput from '../FormInput';
import FormSelector from '../FormSelector';
import media from '../../styled/media';

export interface ContactStyledProps {}

export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 0;
  grid-row-gap: ${({ theme }) => theme.ms.rem(-1)};
  grid-auto-rows: auto;

  ${media.medium`
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${({ theme }) => theme.ms.rem(2)};
    grid-row-gap: ${({ theme }) => theme.ms.rem(1)};
  `}
`;

export const ContactH1 = styled.h1`
  ${({ theme: { fonts, ms } }) => `
    margin-bottom: ${ms.rem(2)};
    font: ${fonts.c.weight.bold} ${ms.rem(2)} ${fonts.c.family};
  `}
`;

export const NameField = styled(FormInput)``;
export const EmailField = styled(FormInput)``;
export const SubjectField = styled(FormSelector)`
  grid-column: 1 / 3;
`;
export const MessageField = styled(FormInput)`
  grid-column: 1 / 3;
  textarea {
    min-height: ${({ theme }) => theme.ms.rem(6)};
  }
`;
export const ContactActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-column: 1 / 3;
`;
export const ContactSendButton = styled(Button).attrs({
  size: ButtonSizes.large
})`
  padding-left: ${({ theme }) => theme.ms.rem(3)};
  padding-right: ${({ theme }) => theme.ms.rem(3)};
`;

export const DontLikeForms = styled.div`
  font-family: TradeGothicNextLTPro-Rg;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.purple.offwhite};

  a {
    color: ${({ theme }) => theme.colors.purple.pastel};
  }
`;

const successBackgroundAnim = keyframes`
  25% { background-color: rgba(29, 204, 197, .95); }
  55% { background-color: rgba(29, 204, 68, .95); }
`;

// Thanks message
export const ContactSuccessFrame = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: ${({ theme }) => theme.layers.windows + 10};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(29, 204, 139, 0.95);
  animation: ${successBackgroundAnim} 10s both infinite linear;
`;

export const ContactSuccessMsg = styled.h1`
  ${({ theme: { fonts, ms } }) => `
    font: ${fonts.c.weight.bold} ${ms.rem(3)} ${fonts.c.family};
    color: white;
    text-shadow: 0 4px 6px rgba(0, 0, 0, .2);
  `}
`;

export const InvalidMsg = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
  ${({ theme: { fonts, colors, ms } }) => `
    font: ${fonts.c.weight.bold} ${ms.rem(1)} ${fonts.c.family};
    color: ${colors.yellow.bright};
  `}
`;
