import mediaQueryGenerator from './mediaqueries';

const media = mediaQueryGenerator([
  {
    name: 'large',
    min: 1440
  },
  {
    name: 'medium',
    min: 700,
    max: 1339
  }
]);

export default media;
