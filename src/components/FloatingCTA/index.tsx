import * as React from 'react';
import { FloatingCTAFrame, FloatingCTAContainer } from './styled';
import Button from '../Button';

type FloatingCTANode = {
  type: 'button' | 'text';
  label: string;
  props?: object;
};

interface FloatingCTAProps {
  content: FloatingCTANode[];
}

const FloatingCTA: React.FunctionComponent<FloatingCTAProps> = ({
  content
}) => {
  return (
    <FloatingCTAContainer>
      <FloatingCTAFrame>
        {content.map((c, i) =>
          c.type === 'button' ? (
            <Button key={`floating-btn-${i}`} {...c.props}>
              {c.label}
            </Button>
          ) : (
            <>{c.label}</>
          )
        )}
      </FloatingCTAFrame>
    </FloatingCTAContainer>
  );
};

export default FloatingCTA;
