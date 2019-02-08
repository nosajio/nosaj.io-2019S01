import * as React from 'react';
import { IBFrame, IBCard } from './styled';

interface InterruptBannerProps {
  
}

const InterruptBanner: React.FunctionComponent<InterruptBannerProps> = ({
  children
}) => {
  return (
    <IBFrame>
      <IBCard>{children}</IBCard>
    </IBFrame>
  );
};

export default InterruptBanner;
