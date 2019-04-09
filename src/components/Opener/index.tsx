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
  hireMeLink: string;
  servicesLink: string;
  workLink: string;
}

const Opener: React.FunctionComponent<OpenerProps> = ({
  headline,
  servicesLink,
  hireMeLink,
  workLink
}) => {
  const mediaMin = mediaRules[0].min ? mediaRules[0].min : 1000;
  return (
    <OpenerFrame>
      <OpenerHeadline>{headline}</OpenerHeadline>
      <OpenerLinks>
        <Media min={mediaMin + 1}>
          <OpenerLink to="/services">{servicesLink}</OpenerLink>
          <OpenerLink to="#work">{workLink}</OpenerLink>
          <OpenerButton caps condensed size={ButtonSizes.large} to="/#contact">
            {hireMeLink}
          </OpenerButton>
        </Media>
        <Media max={mediaMin}>
          <OpenerLink to="/services">{servicesLink}</OpenerLink>
          <OpenerLink to="#work">My work</OpenerLink>
          <OpenerButton caps condensed size={ButtonSizes.large} to="/#contact">
            Hire me
          </OpenerButton>
        </Media>
      </OpenerLinks>
    </OpenerFrame>
  );
};

export default Opener;
