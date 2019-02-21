import styled from 'styled-components';
import { Theme } from '../../styled/theme';
import FormInput from '../FormInput';
import Button from '../Button';
import { ButtonSizes } from '../Button/styled';

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
export const MessageField = styled(FormInput)`
  grid-column: 1 / 3;
`;
export const ContactActions = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-column: 1 / 3;
`;
export const ContactSendButton = styled(Button).attrs({
  size: ButtonSizes.large
})`
  padding-left: ${({ theme }: ContactStyledProps) => theme.ms.rem(3)};
  padding-right: ${({ theme }: ContactStyledProps) => theme.ms.rem(3)};
`;
