import * as React from 'react';
import { CSTextP } from './styled';

export interface CSTextProps {
  text: string[];
  forwardKey?: string;
}

const CSText: React.FunctionComponent<CSTextProps> = ({ text, forwardKey }) => {
  return (
    <>
      {text.map((t, i) => (
        <CSTextP key={`${forwardKey}-p${i}`}>{t}</CSTextP>
      ))}
    </>
  );
};

export default CSText;
