import * as React from 'react';
import { Link } from 'react-router-dom';

/**
 * <Go ... /> is a simple wrapper around React Router's Link tag, to integrate
 * it more into the site, and allow it to be extended
 */

interface GoProps {
  to: string;
}

const Go: React.FunctionComponent<GoProps> = ({ to, ...rest }) => {
  return <Link to={to} {...rest} />;
};

export default Go;
