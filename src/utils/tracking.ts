// Add heap object to window definition
declare global {
  interface Window {
    heap: { track: any };
    ga: (...args: string[]) => void;
  }
}

export const trackHeapEvent = (name: string, data?: object): void => {
  if (!window.heap) {
    return;
  }
  window.heap.track(name, data);
};

export const trackGAEvent = (
  name: string,
  label: string,
  value: string
): void => {
  if (!window.ga) {
    return;
  }
  window.ga('send', 'event', name, label, value);
};
