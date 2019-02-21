import * as React from 'react';
import {
  OpenerButton,
  OpenerFrame,
  OpenerHeadline,
  OpenerHR,
  OpenerLink,
  OpenerLinks
} from './styled';
import { ButtonSizes } from '../Button/styled';

interface OpenerProps {
  headline: string;
}

const Opener: React.FunctionComponent<OpenerProps> = ({ headline }) => {
  return (
    <OpenerFrame>
      <OpenerHR />
      <OpenerHeadline>{headline}</OpenerHeadline>
      <OpenerLinks>
        <OpenerLink to="#work">Explore my work</OpenerLink>
        <OpenerLink to="/services">How I help startups</OpenerLink>
        <OpenerButton caps condensed size={ButtonSizes.large} to="/#contact">
          Hire me for your next project
        </OpenerButton>
      </OpenerLinks>
    </OpenerFrame>
  );
};

export default Opener;
