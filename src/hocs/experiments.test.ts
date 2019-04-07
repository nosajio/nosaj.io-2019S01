import experiment, { timeModulatedIndex } from './experiment';

describe('timeModulatedIndex', () => {
  test('f(a,b,c), mod=5, mins=25', () => {
    const i = timeModulatedIndex(3, 5, 25);
    expect(i).toBe(2);
  });

  test('f(a,b), mod=20, mins=16', () => {
    const i = timeModulatedIndex(2, 20, 16);
    expect(i).toBe(0);
  });

  test('f(a,b,c,d), mod=10, mins=57', () => {
    const i = timeModulatedIndex(4, 10, 57);
    expect(i).toBe(1);
  });

  test('f(a), mod=10, mins=20', () => {
    const i = timeModulatedIndex(1, 10, 20);
    expect(i).toBe(0);
  });
});

describe('expreiment', () => {
  test('should return a component', () => {
    const Component = () => null;
    const C = experiment('/', [Component, Component], ['a', 'b']);
    expect(typeof C === 'function').toBeTruthy();
  });
});
