import * as React from 'react';
import experiment from '../../hocs/experiment';
import Front from '../Front';

export const FrontAB = experiment(
  '/',
  [
    Front,
    ({ ...props }) => (
      <Front
        {...props}
        headline="I help companies design & build cutting edge web apps"
        hireMeLink="Contact me"
        servicesLink="What I can do for you"
      />
    )
  ],
  ['default', 'company friendly']
);
