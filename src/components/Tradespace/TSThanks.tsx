import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Theme } from '../../styled/theme';

interface TSThanksProps {}

const TSThanks: React.FunctionComponent<TSThanksProps> = props => {
  return (
    <ThanksFrame>
      <ThanksHeadline>
        :D
        <br />
        Thanks for reading
      </ThanksHeadline>
      <ThanksMsg>
        <Link to="/services">Click here</Link> to find out more about what I do
        for startups.
      </ThanksMsg>
    </ThanksFrame>
  );
};

export default TSThanks;

const ThanksFrame = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  background: no-repeat url('/bg/zigzag-grad.svg') top / cover;
  padding: ${({ theme }: { theme: Theme }) => theme.ms.rem(3)} 0;
`;
const ThanksHeadline = styled.h1`
  color: black;
  ${({ theme }: { theme: Theme }) => `
    font: 
      ${theme.fonts.a.weight.bold} 
      ${theme.ms.rem(2)} 
      ${theme.fonts.a.family};
    margin-bottom: ${theme.ms.rem(-1)};
  `}
`;
const ThanksMsg = styled.p`
  color: black;
  font-size: ${({ theme }: { theme: Theme }) => theme.ms.rem(1)};
  margin: 0;
`;
