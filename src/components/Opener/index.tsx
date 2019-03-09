import * as React from 'react';
import { ButtonSizes } from '../Button/styled';
import {
  OpenerButton,
  OpenerFrame,
  OpenerHeadline,
  OpenerHR,
  OpenerLink,
  OpenerLinks
} from './styled';
import Media from '../Media';
import { mediaRules } from '../../styled/media';

interface OpenerProps {
  headline: string;
}

const Opener: React.FunctionComponent<OpenerProps> = ({ headline }) => {
  const mediaMin = mediaRules[0].min ? mediaRules[0].min : 1000;
  return (
    <OpenerFrame>
      <OpenerHR />
      <OpenerHeadline>{headline}</OpenerHeadline>
      <OpenerLinks>
        <Media min={mediaMin + 1}>
          <OpenerLink to="#work">Explore my work</OpenerLink>
          <OpenerLink to="/services">How I help startups</OpenerLink>
          <OpenerButton caps condensed size={ButtonSizes.large} to="/#contact">
            Hire me for your next project
          </OpenerButton>
        </Media>
        <Media max={mediaMin}>
          <OpenerLink to="#work">My work</OpenerLink>
          <OpenerLink to="/services">How I help startups</OpenerLink>
          <OpenerButton caps condensed size={ButtonSizes.large} to="/#contact">
            Hire me
          </OpenerButton>
        </Media>
      </OpenerLinks>
    </OpenerFrame>
  );
};

export default Opener;
