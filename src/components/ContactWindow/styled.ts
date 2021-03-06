import { css, keyframes } from 'styled-components';
import media from '../../styled/media';
import { styled } from '../../styled/theme';
import SlickInput from '../SlickInput';

export interface ContactStyledProps {
  isHighlighted?: boolean;
}

export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-column-gap: 0;
  grid-row-gap: ${({ theme }) => theme.ms.rem(1)};

  ${media.medium`
  `}
`;

export const ContactInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-column-gap: 0;
  grid-row-gap: ${({ theme }) => theme.ms.rem(1)};
  padding: ${({ theme }) => theme.ms.rem(1)} 1rem;

  ${media.medium`
    padding: ${({ theme }) => theme.ms.rem(2)};
  `}
`;

export const ContactH1 = styled.h1`
  text-align: center;
  ${({ theme: { fonts, ms } }) => `
    font: ${fonts.a.weight.heavy} ${ms.rem(2)} ${fonts.a.family};
  `}
`;

export const ContactP = styled.p`
  font-size: ${({ theme }) => theme.ms.rem(1)};
  margin: 0;
  text-align: center;
`;

const fieldBaseStyles = css``;

export const NameField = styled(SlickInput)`
  ${fieldBaseStyles}
`;
export const EmailField = styled(SlickInput)`
  ${fieldBaseStyles}
`;
export const MessageField = styled(SlickInput)``;
export const ContactActions = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const ContactSendButton = styled.button<ContactStyledProps>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  min-height: 93px;
  padding: 1rem 0;
  width: 100%;
  transition: all 200ms ease;
  background: ${({ isHighlighted, theme }) =>
    isHighlighted ? theme.colors.teal.bright : '#dbdbdb'};
  border: none;
  color: ${({ theme }) => theme.colors.blackish};
  cursor: pointer;
  font: ${({ theme: { ms, fonts } }) =>
    `${fonts.a.weight.bold} ${ms.rem(1)} ${fonts.a.family}`};
`;

export const ETA = styled.div`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.a.weight.regular};
  color: ${({ theme }) => theme.colors.blackish};
  margin-top: ${({ theme }) => theme.ms.rem(-2)};
`;

export const DontLikeForms = styled.div`
  font-family: TradeGothicNextLTPro-Rg;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.blackish};
  text-align: center;

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
  ${({ theme: { fonts, colors, ms } }) => `
    text-align: center;
    font: ${fonts.c.weight.bold} ${ms.rem(1)} ${fonts.c.family};
    color: ${colors.red.bright};
  `}
`;
