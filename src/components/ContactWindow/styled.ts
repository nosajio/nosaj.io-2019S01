import styled from 'styled-components';
import { Theme } from '../../styled/theme';
import FormInput from '../FormInput';
import Button from '../Button';
import { ButtonSizes } from '../Button/styled';
import FormSelector from '../FormSelector';

export interface ContactStyledProps {
  theme: Theme;
}

export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: ${({ theme }: ContactStyledProps) => theme.ms.rem(2)};
  grid-row-gap: ${({ theme }: ContactStyledProps) => theme.ms.rem(1)};
  grid-auto-rows: auto;
`;

export const ContactH1 = styled.h1`
  ${({ theme: { fonts, ms } }: ContactStyledProps) => `
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
    min-height: ${({ theme }: ContactStyledProps) => theme.ms.rem(6)};
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
  padding-left: ${({ theme }: ContactStyledProps) => theme.ms.rem(3)};
  padding-right: ${({ theme }: ContactStyledProps) => theme.ms.rem(3)};
`;

export const DontLikeForms = styled.div`
  font-family: TradeGothicNextLTPro-Rg;
  font-size: 1rem;
  color: ${({ theme }: ContactStyledProps) => theme.colors.purple.offwhite};

  a { color: ${({ theme }: ContactStyledProps) => theme.colors.purple.pastel}; }
`;
