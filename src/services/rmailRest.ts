import axios from 'axios';

const rmailClient = axios.create({
  baseURL: process.env.REACT_APP_RMAIL_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const sendMessage = async (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  const req = await rmailClient.post('/message', {
    name, email, subject, message
  });
  return req.data;
};
