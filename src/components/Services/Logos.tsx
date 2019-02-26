import * as React from 'react';
import { ServicesLogoImg, ServicesLogosFrame } from './styled';

interface ServicesLogosProps {}

export type LogoImg = {
  alt: string;
  src: string;
  props?: {
    marginTop?: string;
    alignSelf?: 'flex-start' | 'flex-end' | 'center';
  };
};

const logos: LogoImg[] = [
  {
    alt: '',
    src: '/logos/williamhill.svg',
    props: {
      alignSelf: 'flex-start'
    }
  },
  {
    alt: '',
    src: '/logos/firstminute.svg'
  },
  {
    alt: '',
    src: '/logos/bbc.svg'
  },
  {
    alt: '',
    src: '/logos/tradespace.svg'
  },
  {
    alt: '',
    src: '/logos/codeatuni.svg'
  },
  {
    alt: '',
    src: '/logos/utilitywarehouse.svg',
    props: {
      marginTop: '-20px'
    }
  }
];

const ServicesLogos: React.FunctionComponent<ServicesLogosProps> = props => {
  return (
    <ServicesLogosFrame>
      {logos.map((l, i) => (
        <ServicesLogoImg
          key={`logo-img-${i}`}
          alt={l.alt}
          src={l.src}
          {...l.props}
        />
      ))}
    </ServicesLogosFrame>
  );
};

export default ServicesLogos;
