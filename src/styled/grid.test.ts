import { gridcss, gridfn, marginTypes } from './grid';

// 1 col
test('1 col with no margins', () => {
  const e = 6.4583;
  const r = gridfn(1, marginTypes.NONE);
  expect(r).toBe(e);
});

test('1 col with half margins', () => {
  const e = 8.3333;
  const r = gridfn(1);
  expect(r).toBe(e);
});

test('1 col with full margins', () => {
  const e = 10.2083;
  const r = gridfn(1, marginTypes.FULL);
  expect(r).toBe(e);
});

// 3 cols
test('3 cols with no margins', () => {
  const e = 23.125;
  const r = gridfn(3, marginTypes.NONE);
  expect(r).toBe(e);
});

test('3 cols with half margins', () => {
  const e = 25;
  const r = gridfn(3);
  expect(r).toBe(e);
});

describe('grid fn', () => {
  test('3 cols with full margins', () => {
    const e = 26.875;
    const r = gridfn(3, marginTypes.FULL);
    expect(r).toBe(e);
  });

  // 6 cols
  test('6 cols with no margins', () => {
    const e = 48.125;
    const r = gridfn(6, marginTypes.NONE);
    expect(r).toBe(e);
  });

  test('6 cols with half margins', () => {
    const e = 50;
    const r = gridfn(6);
    expect(r).toBe(e);
  });

  test('6 cols with full margins', () => {
    const e = 51.875;
    const r = gridfn(6, marginTypes.FULL);
    expect(r).toBe(e);
  });

  // 12 cols
  test('12 cols with no margins', () => {
    const e = 98.125;
    const r = gridfn(12, marginTypes.NONE);
    expect(r).toBe(e);
  });

  test('12 cols with half margins', () => {
    const e = 100;
    const r = gridfn(12);
    expect(r).toBe(e);
  });
});

describe('grid css fn', () => {
  test('generate width and margin properties', () => {
    const e = `width: 98.125%; margin-left: 0.9375%; margin-right: 0.9375%;`;
    const r = gridcss(12);
    expect(r).toBe(e);
  });
});
