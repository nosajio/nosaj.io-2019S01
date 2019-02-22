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
  ContactSendButton,
  SubjectField,
  DontLikeForms
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
      <ContactH1>Hey, nice to meet you :)</ContactH1>
      <ContactForm>
        <NameField label="Name" onChange={v => setNameVal(v)} />
        <EmailField type="email" label="Email" onChange={v => setEmailVal(v)} />
        <SubjectField
          label="Subject"
          options={[
            {
              label: 'Just saying hi',
              value: 'general'
            },
            {
              label: 'Work enquiry',
              value: 'work'
            }
          ]}
        />
        <MessageField
          type="textarea"
          label="Message"
          onChange={v => setMessageVal(v)}
        />
        <ContactActions>
          <DontLikeForms>
            Don’t like forms? You can also find me on{' '}
            <a href="https://twitter.com/__nosaj" target="_blank">
              Twitter
            </a>{' '}
            and{' '}
            <a href="https://github.com/nosajio" target="_blank">
              GitHub
            </a>
          </DontLikeForms>
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
