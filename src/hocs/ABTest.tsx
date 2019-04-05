import { ComponentType } from 'react';
import { trackHeapEvent } from '../utils/tracking';

const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const abTest = (path: string, components: ComponentType[]): ComponentType => {
  const componentCount = components.length;
  if (componentCount < 1) {
    throw new TypeError(
      'Pass an array of components as the second argument in abTest(...)'
    );
  }
  const randomIndex = Math.round(Math.random() * (componentCount - 1));
  trackHeapEvent('AB Test', {
    path,
    version: alpha[randomIndex]
  });
  return components[randomIndex];
};

export default abTest;
