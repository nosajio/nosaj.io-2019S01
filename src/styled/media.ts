import mediaQueryGenerator, { MediaQueryDefinition } from './mediaqueries';

export const mediaRules: MediaQueryDefinition[] = [
  {
    name: 'large',
    min: 1440
  },
  {
    name: 'medium',
    min: 700
  }
];

const media = mediaQueryGenerator(mediaRules);

export default media;
