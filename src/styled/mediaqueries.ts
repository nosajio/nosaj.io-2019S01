import { css, FlattenSimpleInterpolation } from 'styled-components';

export type MediaQueryRule = {
  min?: number; // px
  max?: number; // px
  name: string;
};

export type MediaQueryRuleFn = (...rules: any) => FlattenSimpleInterpolation;

export type MediaQueryIndex = {
  [name: string]: MediaQueryRuleFn;
};

const mqRuleString = (r: MediaQueryRule): string =>
  `${r.min ? `min-width: ${r.min}px` : ''} ${r.min && r.max ? 'and' : ''} ${
    r.max ? `max-width: ${r.max}px` : ''
  }`;

const createMediaqueries = (rules: MediaQueryRule[]) =>
  rules.reduce((mqs: MediaQueryIndex, r) => {
    const mediaqueryFn = (first: any, ...rest: any[]) => css`
      @media screen and (${mqRuleString(r)}) {
        ${css(first, ...rest)}
      }
    `;
    mqs[r.name] = mediaqueryFn;
    return mqs;
  }, {});

export default createMediaqueries;
