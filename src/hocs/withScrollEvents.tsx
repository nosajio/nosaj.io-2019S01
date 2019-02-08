import * as React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';

export interface WithScrollEventsProps {}

// WithScrollEvents
const WithScrollEvents = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  class WithScrollEvents extends React.Component<P & WithScrollEventsProps> {

    render() {
      return <WrappedComponent {...this.props} />;
    }
    
  }
  return WithScrollEvents;
};

export default WithScrollEvents;
