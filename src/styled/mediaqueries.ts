import { css, FlattenSimpleInterpolation } from 'styled-components';
import { Theme } from './theme';

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

const createMediaqueries = (
  rules: MediaQueryRule[],
  theme: Theme
): MediaQueryIndex =>
  rules.reduce((mqs: MediaQueryIndex, r) => {
    const mqRules = mqRuleString(r);
    mqs[r.name] = (literals: TemplateStringsArray, ...interpolations: any) => {
      const ruleCSS = css`
        @media ${mqRules} {
          ${css(literals, ...interpolations)}
        }
      `;
      // Manually resolve any unresolved template fns. For some reason
      // styled-components has left it to me to call them... Perhaps I'm 
      // missing something...
      const resolvedCSS = ruleCSS.map((it: any) =>
        typeof it === 'function' ? it({ theme }) : it
      );
      return resolvedCSS.join("");
    };
    return mqs;
  }, {});

// export const mqs = {
//   large: (strs: TemplateStringsArray, ...interpolations: any[]) => {
//     return css(strs, ...interpolations);
//     // return css`
//     //   @media screen and (min-width: 1440px) {
//     //     ${css(strs, ...interpolations)}
//     //   }
//     // `;
//   }
// };

export default createMediaqueries;
