import { ComponentType, FunctionComponent } from 'react';
import { trackHeapEvent, trackGAEvent } from '../utils/tracking';

const randomSelectIndex = (len: number): number =>
  Math.round(Math.random() * (len - 1));

export const timeModulatedIndex = (
  len: number,
  cycleMins: number,
  m?: number
): number => {
  const segs = 60 / cycleMins;
  const segDivisions = segs / len;
  const modTime = 60 / segDivisions;
  const now = new Date();
  const relativeTime = (m || now.getMinutes()) % modTime;
  const index = relativeTime / cycleMins;
  return Math.floor(index);
};

// An experiment is basically an AB test. Pass the components to test and their
// corresponding version labels, and the function will cycle through them over
// time. If no version strings are present then versions will be labeled
// alphabetically.
//
// NOTE: When NODE_ENV environment variable is set to 'development', experiments
// will be shown at random. However, when NODE_ENV is 'production', versions
// will be cycled using the cycleMinutes argument.

const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const experiment = (
  path: string,
  components: (ComponentType | FunctionComponent<any>)[],
  versions: string[] = alpha,
  cycleMinutes: number = 5 /* minutes */
): ComponentType | FunctionComponent<any> => {
  const componentCount = components.length;
  if (componentCount < 1) {
    throw new TypeError(
      'Pass an array of components as the second argument in experiment(...)'
    );
  }
  const env = process.env.NODE_ENV || 'production';
  const randomIndex =
    env === 'production'
      ? timeModulatedIndex(componentCount, cycleMinutes)
      : randomSelectIndex(componentCount);
  const trackData = {
    path,
    version: versions[randomIndex]
  };
  trackHeapEvent('Experiment', trackData);
  trackGAEvent('Experiment', trackData);
  return components[randomIndex];
};

export default experiment;
