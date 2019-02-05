import * as React from 'react';
import { headingEl } from './styled';
import withGrid from '../../hocs/withGrid';

interface HeadingProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4';
  marginTop?: string;
  marginBottom?: string;
  className?: string;
  children: React.ReactNode;
}

const Heading: React.FunctionComponent<HeadingProps> = ({
  type,
  marginTop,
  marginBottom,
  className,
  children
}) => {
  const HeadingEl = headingEl(type);
  return (
    <HeadingEl
      marginTop={marginTop}
      marginBottom={marginBottom}
      className={className}
    >
      {children}
    </HeadingEl>
  );
};

export default withGrid(Heading);
