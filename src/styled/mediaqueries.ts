import { css, FlattenSimpleInterpolation } from 'styled-components';

export type MediaQueryRule = {
  min?: number; // px
  max?: number; // px
  name: string;
};

export type MediaQueryRuleFn = (...rules: any) => FlattenSimpleInterpolation;

export type MediaQueryIndex = {
  [name: string]: any;
};

const mqRuleString = (r: MediaQueryRule): string =>
  `screen and ${r.min ? `(min-width: ${r.min}px)` : ''} ${
    r.min && r.max ? 'and' : ''
  } ${r.max ? `(max-width: ${r.max}px)` : ''}`;

const createMediaqueries = (rules: MediaQueryRule[]): MediaQueryIndex =>
  rules.reduce((mqs: MediaQueryIndex, r) => {
    const mqRules = mqRuleString(r);
    mqs[r.name] = (
      literals: TemplateStringsArray,
      ...interpolations: any
    ) => css`
      @media ${mqRules} {
        ${css(literals, ...interpolations)}
      }
    `;
    return mqs;
  }, {});

export default createMediaqueries;
