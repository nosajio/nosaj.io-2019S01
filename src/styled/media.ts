import mediaQueryGenerator, {
  MediaQueryDefinition,
  defineMediaQueries
} from './mediaqueries';

export const mediaRules = defineMediaQueries([
  {
    name: 'large',
    min: 1440
  },
  {
    name: 'medium',
    min: 700
  }
]);

const media = mediaQueryGenerator(mediaRules);

export default media;
