import * as React from 'react';

interface OnRouteChangeEventProps {
  onRouteChange: () => void;
}

const OnRouteChangeEvent: React.FunctionComponent<OnRouteChangeEventProps> = ({
  onRouteChange
}) => {
  if (onRouteChange) {
    onRouteChange();
  }
  return null;
};

export default OnRouteChangeEvent;
