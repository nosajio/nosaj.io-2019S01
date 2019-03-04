import * as React from 'react';
import {
  Route,
  RouteComponentProps,
  RouterProps,
  StaticContext
} from 'react-router';
import noop from '../utils/noop';

interface HashRouteProps {
  component?: React.ReactType;
  render?: (props: RouteComponentProps<any, StaticContext, any>) => any;
  path: string;
}

// Use like a normal react-router <Route .../>
// <HashRoute path="#modal" component={MyComponent} />
const HashRoute: React.FunctionComponent<HashRouteProps> = ({
  component: Component,
  path,
  render = noop,
  ...passProps
}) => {
  if (!path) {
    return null;
  }
  return Component ? (
    <Route
      component={({ location, ...props }: RouteComponentProps) =>
        location.hash === path ? <Component {...props} /> : null
      }
      {...passProps}
    />
  ) : (
    <Route render={location.hash === path ? render : undefined} />
  );
};

export default HashRoute;
