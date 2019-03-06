import { css, FlattenSimpleInterpolation, BaseThemedCssFunction } from 'styled-components';

export type MediaQueryRule<K extends string> = {
  min?: number; // px
  max?: number; // px
  name: K;
};

///

type MediaQueryDefinitionObject<K extends string> = {
  [P in K]: BaseThemedCssFunction<any>
};

function mediaQueryGenerator<K extends string>(
  defs: Array<MediaQueryRule<K>>
): MediaQueryDefinitionObject<K> {
  const typedDefs = defs.map(r => asMediaQueryDefinition(r));
  return typedDefs.reduce(
    (mqs: MediaQueryDefinitionObject<K>, r) => {
      const mqRules = mqRuleString(r);
      mqs[r.name] = (
        literals: any,
        ...interpolations: any
      ) => css`
        @media ${mqRules} {
          ${css(literals, ...interpolations)}
        }
      `;
      return mqs;
    },
    {} as MediaQueryDefinitionObject<K>
  );
}

export interface MediaQueryDefinition<K extends string = string> {
  name: K;
  min?: number; // px
  max?: number; // px
}

function asMediaQueryDefinition<K extends string>(
  mqd: MediaQueryRule<K>
): MediaQueryDefinition<K> {
  return mqd;
}

const mqRuleString = (r: MediaQueryRule<string>): string =>
  `screen and ${r.min ? `(min-width: ${r.min}px)` : ''} ${
    r.min && r.max ? 'and' : ''
  } ${r.max ? `(max-width: ${r.max}px)` : ''}`;

export default mediaQueryGenerator;
