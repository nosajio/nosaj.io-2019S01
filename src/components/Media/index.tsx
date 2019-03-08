import * as React from 'react';
import useMedia from '../../hooks/useMedia';

interface MediaProps {
  min?: number;
  max?: number;
  children?: any;
}

const Media: React.FunctionComponent<MediaProps> = ({ min, max, children }) => {
  if (!(min || max)) return null;
  const match = useMedia({ min, max });
  return match ? children : null;
};

export default Media;
