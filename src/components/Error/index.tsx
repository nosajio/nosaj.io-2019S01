import * as React from 'react';
import {
  ErrCode,
  ErrFrame,
  ErrLink,
  ErrMessage,
  ErrPage,
  ErrLinks
} from './styled';

interface ErrorProps {
  code: string;
  message?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
}

const Error: React.FunctionComponent<ErrorProps> = ({
  code,
  links,
  message
}) => {
  console.log(links);
  
  return (
    <ErrPage>
      <ErrFrame>
        <ErrCode>{code}</ErrCode>
        {message && <ErrMessage>{message}</ErrMessage>}
        {links && (
          <ErrLinks>
            {links.map(l => (
              <ErrLink to={l.href}>{l.label}</ErrLink>
            ))}
          </ErrLinks>
        )}
      </ErrFrame>
    </ErrPage>
  );
};

export default Error;
