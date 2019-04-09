import * as React from 'react';
import {
  ProcessFrame,
  ProcessContent,
  ProcessHead,
  ProcessP,
  ProcessText
} from './styled';
import Button from '../Button';
import theme from '../../styled/theme';
import { ButtonSizes } from '../Button/styled';

interface ProcessProps {}

const Process: React.FunctionComponent<ProcessProps> = props => {
  return (
    <ProcessFrame>
      <ProcessContent>
        <ProcessHead>My Process</ProcessHead>
        <ProcessText>
          <ProcessP>
            I specialise in partnering with startups and corporations to design
            and build effective web software. My background in design,
            development and infrastructure means I can navigate entire projects
            by myself or work on many parts of an existing project. I work with
            modern tools like <em>JavaScript</em>, <em>React</em>,{' '}
            <em>Styled Components</em> and <em>GraphQL</em> in the browser, and{' '}
            <em>Go</em> for systems oriented solutions. Contact me today to get
            started!
          </ProcessP>
          <Button
            caps
            condensed
            to="/#contact"
            size={ButtonSizes.large}
            bgColor={theme.colors.purple.bright}
            fgColor="white"
          >
            Let's get started
          </Button>
        </ProcessText>
      </ProcessContent>
    </ProcessFrame>
  );
};

export default Process;
