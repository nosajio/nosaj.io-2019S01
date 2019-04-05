// Add heap object to window definition
declare global {
  interface Window {
    heap: {track: any };
  }
}

export const trackHeapEvent = (name: string, data?: object): void => {
  if (! window.heap) {
    return;
  }
  window.heap.track(name, data);
};
