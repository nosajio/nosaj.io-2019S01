import * as React from 'react';
import { Route, RouteChildrenProps, RouteComponentProps } from 'react-router';

interface HashRouteProps {
  component: React.ReactType
  path: string;
}

// Use like a normal react-router <Route .../>
// <HashRoute path="#modal" component={MyComponent} />
const HashRoute: React.FunctionComponent<HashRouteProps> = ({
  component: Component,
  path,
  ...passProps
}) => {
  if (!path) {
    return null;
  }
  return (
    <Route
      component={({ location, ...props }: RouteComponentProps) =>
        location.hash === path ? <Component {...props} /> : null
      }
      {...passProps}
    />
  );
};

export default HashRoute;
