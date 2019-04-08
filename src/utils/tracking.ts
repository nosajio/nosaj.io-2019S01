// Add heap object to window definition
declare global {
  interface Window {
    heap: { track: any };
    gtag: (t: string, n: string, d?: object) => void;
  }
}

interface TrackingFn {
  (name: string, data?: object): void;
}

export const trackHeapEvent: TrackingFn = (name, data): void => {
  if (!window.heap) {
    return;
  }
  window.heap.track(name, data);
};

export const trackGAEvent: TrackingFn = (name, data): void => {
  if (!window.gtag) {
    return;
  }
  window.gtag('event', name, data);
};
