import * as React from 'react';

interface ScrollToTopAutoProps {}

const ScrollToTopAuto: React.FunctionComponent<
  ScrollToTopAutoProps
> = props => {
  window.scrollTo({
    top: 0
  });
  return null;
};

export default ScrollToTopAuto;
