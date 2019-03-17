import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { sendMessage } from '../../services/rmailRest';
import noop from '../../utils/noop';
import Window from '../Window';
import {
  ContactActions,
  ContactForm,
  ContactH1,
  ContactInputs,
  ContactP,
  ContactSendButton,
  ContactSuccessFrame,
  ContactSuccessMsg,
  DontLikeForms,
  EmailField,
  ETA,
  InvalidMsg,
  MessageField,
  NameField
} from './styled';

const subjects = [
  {
    label: '👋    Just saying hi',
    value: 'general',
    responseTime: '~ 24h'
  },
  {
    label: '🛠    Work enquiry',
    value: 'work',
    responseTime: '< 12h'
  }
];

const ContactWindow: React.FunctionComponent<RouteComponentProps> = ({
  history
}) => {
  const [invalidState, setInvalidState] = React.useState(false);
  const [sentState, setSentState] = React.useState(false);
  const [nameVal, setNameVal] = React.useState('');
  const [emailVal, setEmailVal] = React.useState('');
  const [messageVal, setMessageVal] = React.useState('');

  const removeContactFromUrl = !history
    ? noop
    : () => {
        history.replace(history.location.pathname);
      };

  const isFormValid = () => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      !sentState &&
      (!nameVal || !(emailVal && emailRegex.test(emailVal)) || !messageVal)
    ) {
      return false;
    }
    return true;
  };

  const handleSubmitForm = async (e: React.MouseEvent): Promise<void> => {
    e.preventDefault();
    e.stopPropagation();
    if (!isFormValid()) {
      setInvalidState(true);
      return;
    }
    await sendMessage(nameVal, emailVal, 'general', messageVal);
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
      <Window
        padding={0}
        isGone={sentState}
        onClose={() => removeContactFromUrl()}
      >
        <ContactForm>
          <ContactInputs>
            <ContactH1>Hey 👋</ContactH1>
            <ContactP>
              I'd love to hear about what you're working on. Or if you just want
              to say hey, that's fine too :)
            </ContactP>
            {invalidState && (
              <InvalidMsg>
                Please make sure all fields are filled out
              </InvalidMsg>
            )}
            <NameField
              name="name"
              label="What's your name?"
              type="text"
              onChange={v => setNameVal(v)}
            />
            <EmailField
              name="email"
              label="What's your email address?"
              type="email"
              onChange={v => setEmailVal(v)}
            />
            <MessageField
              grow
              name="message"
              label="Tell me about your project, or just say hey :)"
              type="textarea"
              onChange={v => setMessageVal(v)}
            />
          </ContactInputs>
          <ContactActions>
            <ContactSendButton
              isHighlighted={isFormValid()}
              onClick={e => handleSubmitForm(e)}
            >
              Send
              <ETA>Estimated response time &lt; 24hrs</ETA>
            </ContactSendButton>
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
          </ContactActions>
        </ContactForm>
      </Window>
    </>
  );
};

export default ContactWindow;
