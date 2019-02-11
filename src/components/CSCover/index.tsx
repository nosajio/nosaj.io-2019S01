import * as React from 'react';
import {
  CSCoverFrame,
  CSCoverH1,
  CSCoverMeta,
  CSCoverMetaContent,
  CSCoverMetaLabel
} from './styled';

export interface CSCoverProps {
  title: string;
  bgColor?: string;
  fgColor?: string;
  textColor?: string;
  border?: boolean;
  meta?: Array<{
    label: string;
    content: string;
  }>;
}

const CSCover: React.FunctionComponent<CSCoverProps> = ({
  title,
  bgColor = 'black',
  fgColor = 'white',
  textColor = 'white',
  border = true,
  meta = []
}) => {
  return (
    <CSCoverFrame
      withBorder={border}
      bgColor={bgColor}
      fgColor={fgColor}
      textColor={textColor}
    >
      <CSCoverH1>{title}</CSCoverH1>
      {meta &&
        meta.map((m, i) => (
          <CSCoverMeta key={`meta-${i}`}>
            <CSCoverMetaLabel fgColor={fgColor}>{m.label}</CSCoverMetaLabel>
            <CSCoverMetaContent>{m.content}</CSCoverMetaContent>
          </CSCoverMeta>
        ))}
    </CSCoverFrame>
  );
};

export default CSCover;
