import { css, keyframes } from 'styled-components';
import media from '../../styled/media';
import { styled } from '../../styled/theme';
import FormSelector from '../FormSelector';
import SlickInput from '../SlickInput';

export interface ContactStyledProps {}

export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 0;
  grid-row-gap: ${({ theme }) => theme.ms.rem(-1)};
  grid-auto-rows: auto;

  ${media.medium`
    grid-row-gap: ${({ theme }) => theme.ms.rem(1)};
  `}
`;

export const ContactInputs = styled.div`
  ${media.medium`
    padding: ${({ theme }) => theme.ms.rem(2)};
  `}
`;

export const ContactH1 = styled.h1`
  text-align: center;
  ${({ theme: { fonts, ms } }) => `
    margin-bottom: ${ms.rem(2)};
    font: ${fonts.a.weight.heavy} ${ms.rem(2)} ${fonts.a.family};
  `}
`;

const fieldBaseStyles = css`
  margin-bottom: ${({ theme }) => theme.ms.rem(1)};
  ${media.large`
    margin-bottom: ${({ theme }) => theme.ms.rem(3)};
  `}
`;

export const NameField = styled(SlickInput)`
  ${fieldBaseStyles}
`;
export const EmailField = styled(SlickInput)`
  ${fieldBaseStyles}
`;
export const SubjectField = styled(FormSelector)`
  ${fieldBaseStyles}
`;
export const MessageField = styled(SlickInput)``;
export const ContactActions = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const ContactSendButton = styled.button`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  background: #dbdbdb;
  border: none;
  color: black;
  cursor: pointer;
  font: ${({ theme: { ms, fonts } }) =>
    `${fonts.a.weight.bold} ${ms.rem(2)} ${fonts.a.family}`};
`;

export const ETA = styled.span`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.a.weight.regular};
  color: #818181;
`;

export const DontLikeForms = styled.div`
  font-family: TradeGothicNextLTPro-Rg;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.blackish};
  margin: ${({ theme }) => `1rem 0 ${theme.ms.rem(1)}`};

  a {
    color: ${({ theme }) => theme.colors.purple.bright};
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
  grid-row: 1;
  ${({ theme: { fonts, colors, ms } }) => `
    font: ${fonts.c.weight.bold} ${ms.rem(1)} ${fonts.c.family};
    color: ${colors.red.bright};
  `}
`;
