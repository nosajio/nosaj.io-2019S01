import * as React from 'react';
import Page from '../Page';
import { ServicesOpenerFrame, ServicesOpenerHead } from './styled';

interface ServicesOpenerProps {
  text: string;
}

const ServicesOpener: React.FunctionComponent<ServicesOpenerProps> = ({
  text
}) => {
  return (
    <ServicesOpenerFrame>
      <Page.Grid>
        <ServicesOpenerHead>{text}</ServicesOpenerHead>
      </Page.Grid>
    </ServicesOpenerFrame>
  );
};

export default ServicesOpener;