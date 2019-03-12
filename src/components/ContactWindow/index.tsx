import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { sendMessage } from '../../services/rmailRest';
import theme from '../../styled/theme';
import noop from '../../utils/noop';
import Window from '../Window';
import {
  ContactActions,
  ContactForm,
  ContactH1,
  ContactSendButton,
  DontLikeForms,
  EmailField,
  MessageField,
  NameField,
  SubjectField,
  ContactSuccessFrame,
  ContactSuccessMsg,
  InvalidMsg
} from './styled';

const subjects = [
  {
    label: 'Just saying hi',
    value: 'general'
  },
  {
    label: 'Work enquiry',
    value: 'work'
  }
];

const ContactWindow: React.FunctionComponent<RouteComponentProps> = ({
  history
}) => {
  const [invalidState, setInvalidState] = React.useState(false);
  const [sentState, setSentState] = React.useState(false);
  const [nameVal, setNameVal] = React.useState('');
  const [emailVal, setEmailVal] = React.useState('');
  const [subjectVal, setSubjectVal] = React.useState(subjects[0].value);
  const [messageVal, setMessageVal] = React.useState('');

  const removeContactFromUrl = !history
    ? noop
    : () => {
        history.replace(history.location.pathname);
      };

  const isFormValid = () => {
    if (!sentState && (!nameVal || !emailVal)) {
      return false;
    }
    return true;
  };

  const handleSubmitForm = async (): Promise<void> => {
    if (!isFormValid()) {
      setInvalidState(true);
      return;
    }
    await sendMessage(nameVal, emailVal, subjectVal, messageVal);
    setSentState(true);
    setInvalidState(false);
  };

  // Automatically close the contact route after n seconds. Used after the form
  // has been submitted
  const killClock = 8 * 1000; // n = ms = seconds * 1000
  let killTimeout: any;
  React.useEffect(() => {
    if (killTimeout || !sentState) {
      return;
    }
    killTimeout = setTimeout(() => removeContactFromUrl(), killClock);
    return () => {
      if (killTimeout) {
        clearTimeout(killTimeout);
      }
    };
  }, [sentState]);

  return (
    <>
      {sentState && (
        <ContactSuccessFrame>
          <ContactSuccessMsg>Thanks for your message</ContactSuccessMsg>
        </ContactSuccessFrame>
      )}
      <Window isGone={sentState} onClose={() => removeContactFromUrl()}>
        <ContactH1>Hey, nice to meet you 👋</ContactH1>
        <ContactForm>
          {invalidState && (
            <InvalidMsg>
              Please make sure the name and email fields are both filled out
            </InvalidMsg>
          )}
          <SubjectField
            name="subject"
            label="Subject"
            options={subjects}
            onChange={v => setSubjectVal(String(v.value))}
          />
          <NameField name="name" label="Name" onChange={v => setNameVal(v)} />
          <EmailField
            name="email"
            type="email"
            label="Email"
            onChange={v => setEmailVal(v)}
          />
          <MessageField
            name="message"
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
              onClick={() => handleSubmitForm()}
              bgColor={theme.colors.purple.bright}
              fgColor={theme.colors.black}
            >
              Send
            </ContactSendButton>
          </ContactActions>
        </ContactForm>
      </Window>
    </>
  );
};

export default ContactWindow;
