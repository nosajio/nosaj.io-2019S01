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
  ContactSendButton,
  ContactSuccessFrame,
  ContactSuccessMsg,
  DontLikeForms,
  EmailField,
  ETA,
  InvalidMsg,
  MessageField,
  NameField,
  SubjectField
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
  const [subjectVal, setSubjectVal] = React.useState(subjects[0].value);
  const [messageVal, setMessageVal] = React.useState('');

  const subject = subjects.find(s => s.value === subjectVal);

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

  const handleSubmitForm = async (e: React.MouseEvent): Promise<void> => {
    e.preventDefault();
    e.stopPropagation();
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
      <Window
        padding={0}
        isGone={sentState}
        onClose={() => removeContactFromUrl()}
      >
        <ContactForm>
          <ContactInputs>
            <ContactH1>Hey 👋</ContactH1>
            {invalidState && (
              <InvalidMsg>
                Please make sure the name and email fields are both filled out
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
            <SubjectField
              name="subject"
              label=""
              options={subjects}
              onChange={v => setSubjectVal(String(v.value))}
            />
            <MessageField
              grow
              name="message"
              label="Write your message here..."
              type="textarea"
              onChange={v => setMessageVal(v)}
            />
            {/*
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
          /> */}
          </ContactInputs>
          <ContactActions>
            <ContactSendButton
              isHighlighted={isFormValid()}
              onClick={e => handleSubmitForm(e)}
            >
              Send
              {subject && (
                <ETA>Estimated response time {subject.responseTime}</ETA>
              )}
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
