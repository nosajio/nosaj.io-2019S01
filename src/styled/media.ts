import mediaQueryGenerator from './mediaqueries';

const media = mediaQueryGenerator([
  {
    name: 'large',
    min: 1440
  },
  {
    name: 'medium',
    min: 700
  }
]);

export default media;
