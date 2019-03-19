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
  return (
    <ErrPage>
      <ErrFrame>
        <ErrCode>{code}</ErrCode>
        {message && <ErrMessage>{message}</ErrMessage>}
        {links && (
          <ErrLinks>
            {links.map((l, i) => (
              <ErrLink key={`link-${i}`} to={l.href}>
                {l.label}
              </ErrLink>
            ))}
          </ErrLinks>
        )}
      </ErrFrame>
    </ErrPage>
  );
};

export default Error;
