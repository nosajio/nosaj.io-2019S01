import * as React from 'react';
import {
  OpenerFrame,
  OpenerHeadline,
  OpenerHR,
  OpenerLink,
  OpenerLinks,
  WavesFixed
} from './styled';

interface OpenerProps {
  headline: string;
}

const Opener: React.FunctionComponent<OpenerProps> = ({ headline }) => {
  return (
    <>
      <WavesFixed />
      <OpenerFrame>
        <OpenerHR />
        <OpenerHeadline>{headline}</OpenerHeadline>
        <OpenerLinks>
          <OpenerLink to="#work">Explore my work</OpenerLink>
          <OpenerLink to="/services">How I help startups</OpenerLink>
        </OpenerLinks>
      </OpenerFrame>
    </>
  );
};

export default Opener;
