import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import theme from '../../styled/theme';
import noop from '../../utils/noop';
import Button from '../Button';
import Window from '../Window';
import {
  ContactForm,
  ContactH1,
  EmailField,
  MessageField,
  NameField,
  ContactActions,
  ContactSendButton
} from './styled';

const ContactWindow: React.FunctionComponent<RouteComponentProps> = ({
  history
}) => {
  const [nameVal, setNameVal] = React.useState('');
  const [emailVal, setEmailVal] = React.useState('');
  const [messageVal, setMessageVal] = React.useState('');
  const removeContactFromUrl = !history
    ? noop
    : () => {
        history.replace(history.location.pathname);
      };
  return (
    <Window onClose={() => removeContactFromUrl()}>
      <ContactH1>Hey, thanks for getting in touch :)</ContactH1>
      <ContactForm>
        <NameField label="Name" onChange={v => setNameVal(v)} />
        <EmailField type="email" label="Email" onChange={v => setEmailVal(v)} />
        <MessageField
          type="textarea"
          label="Message"
          onChange={v => setMessageVal(v)}
        />
        <ContactActions>
          <ContactSendButton
            bgColor={theme.colors.purple.bright}
            fgColor={theme.colors.black}
          >
            Send
          </ContactSendButton>
        </ContactActions>
      </ContactForm>
    </Window>
  );
};

export default ContactWindow;
