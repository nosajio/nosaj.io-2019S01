import * as React from 'react';
import { CSImgImg } from './styled';

export interface CSImgProps {
  src: string;
}

const CSImg: React.FunctionComponent<CSImgProps> = ({ src }) => {
  return <CSImgImg src={src} />;
};

export default CSImg;
